<# install\mobile.ps1
   Configura el entorno móvil (Expo/React Native + NativeWind).
#>
[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $PSScriptRoot
$MobileDir = Join-Path $Root 'apps\mobile'

Write-Host "==> [mobile] Preparando entorno en: $MobileDir" -ForegroundColor Cyan
if (-not (Test-Path $MobileDir)) {
  npx --yes create-expo-app@latest $MobileDir --template blank-typescript --yes | Out-Null
} else {
  Write-Host "==> [mobile] La carpeta ya existe, omitiendo 'create-expo-app'." -ForegroundColor Yellow
}

Push-Location $MobileDir
# Instalar dependencias
npm install nativewind tailwindcss@3 | Out-Null
npx expo install | Out-Null

function NoBOM($path, $content) {
  $dir = Split-Path -Parent $path
  if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  $enc = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($path, $content, $enc)
}

# tailwind.config.js con preset de NativeWind + paths
NoBOM (Join-Path $MobileDir "tailwind.config.js") @"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: { extend: {} },
  plugins: [],
};
"@

# metro.config.js
NoBOM (Join-Path $MobileDir "metro.config.js") @"
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: './global.css' });
"@

# global.css
NoBOM (Join-Path $MobileDir "global.css") "@tailwind base;`n@tailwind components;`n@tailwind utilities;"

# babel.config.js con jsxImportSource y preset de nativewind
NoBOM (Join-Path $MobileDir "babel.config.js") @"
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
"@

# Entry index.js para Expo
NoBOM (Join-Path $MobileDir "index.js") @"
import { registerRootComponent } from 'expo';
import App from './App';
registerRootComponent(App);
"@

# Ajustar package.json (main y scripts), limpiando posible BOM
# Ajustar package.json (main y scripts), limpiando posible BOM
$mpRaw = (Get-Content (Join-Path $MobileDir "package.json") -Raw) -replace "^\uFEFF",""
$mp = $mpRaw | ConvertFrom-Json
$mp.main = "index.js"
$mp.scripts.start = "expo start"
$mp.scripts.android = "expo run:android"
$mp.scripts.ios = "expo run:ios"
$mp.scripts.web = "expo start --web"

# Guardar la salida de ConvertTo-Json en una variable
$jsonContent = $mp | ConvertTo-Json -Depth 10

# Pasar la variable a la función NoBOM
NoBOM (Join-Path $MobileDir "package.json") $jsonContent

# App.tsx demo
if (-not (Test-Path (Join-Path $MobileDir "App.tsx"))) {
  NoBOM (Join-Path $MobileDir "App.tsx") @"
import { Text, View, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const scheme = useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-xl font-semibold dark:text-white">
        Expo + NativeWind listo ({scheme})
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
"@
}
Pop-Location
Write-Host "==> [mobile] OK" -ForegroundColor Green