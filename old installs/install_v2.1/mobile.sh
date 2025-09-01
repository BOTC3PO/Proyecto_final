#!/bin/bash

set -e

root=$(dirname "$(dirname "$(readlink -f "$0")")")
mobile_dir="$root/apps/mobile"

echo "==> [mobile] Preparando entorno en: $mobile_dir"
if [ ! -d "$mobile_dir" ]; then
  npx --yes create-expo-app@latest "$mobile_dir" --template blank-typescript --yes
else
  echo "==> [mobile] La carpeta ya existe, omitiendo 'create-expo-app'."
fi

cd "$mobile_dir"

# Instalar dependencias
npm install nativewind tailwindcss@3
npx expo install

# tailwind.config.js con preset de NativeWind + paths
mkdir -p "$(dirname "$mobile_dir/tailwind.config.js")"
cat > "$mobile_dir/tailwind.config.js" << EOF
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
EOF

# metro.config.js
cat > "$mobile_dir/metro.config.js" << EOF
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: './global.css' });
EOF

# global.css
echo '@tailwind base;
@tailwind components;
@tailwind utilities;' > "$mobile_dir/global.css"

# babel.config.js con jsxImportSource y preset de nativewind
cat > "$mobile_dir/babel.config.js" << EOF
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
EOF

# Entry index.js para Expo
cat > "$mobile_dir/index.js" << EOF
import { registerRootComponent } from 'expo';
import App from './App';
registerRootComponent(App);
EOF

# Ajustar package.json (main y scripts)
package_json=$(cat "$mobile_dir/package.json")
package_json=$(echo "$package_json" | sed 's/"main": ".*"/"main": "index.js"/')
package_json=$(echo "$package_json" | sed 's/"scripts": {/"scripts": {
    "start": "expo start",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web",/')
echo "$package_json" > "$mobile_dir/package.json"

# App.tsx demo
if [ ! -f "$mobile_dir/App.tsx" ]; then
  cat > "$mobile_dir/App.tsx" << EOF
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
EOF
fi

echo "==> [mobile] OK"