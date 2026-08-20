# Políticas de Ejecución en PowerShell: Nivel Intermedio

En el ecosistema de Windows, PowerShell no solo es una herramienta de automatización, sino también un vector de riesgo de seguridad si se usa sin restricciones. La política de ejecución (`ExecutionPolicy`) es el mecanismo nativo de Windows diseñado para prevenir que se ejecuten scripts no confiables por accidente o por mala fe. Entender cómo funciona a nivel intermedio implica ir más allá de "habilitar y deshabilitar" y comprender el alcance, la jerarquía y los límites de esta protección.

## ¿Qué es y cómo funciona realmente?

La política de ejecución no es un firewall que bloquea binarios; es una advertencia de confianza. Cuando intentas ejecutar un script (`.ps1`), PowerShell verifica la política para decidir si debe cargar el motor de scripting. Si la política lo impide, PowerShell **no ejecuta nada** y muestra un error.

Es crucial entender que la política de ejecución **no firma digitalmente ni valida la integridad** del script por sí misma. Solo verifica si el script está bloqueado por el sistema de archivos (etiqueta "Zona") o si el script en sí está firmado digitalmente por una entidad de confianza, dependiendo de la política elegida.

### Jerarquía y Alcance

Las políticas se aplican en un orden específico, y la configuración más restrictiva gana dentro de su ámbito. Existen cuatro niveles de alcance:

1.  **LocalMachine (Máquina):** La configuración predeterminada en servidores y estaciones de trabajo corporativas. Afecta a todos los usuarios.
2.  **CurrentUser (Usuario):** Afecta solo al perfil del usuario actual. Permite a usuarios sin privilegios de administrador restringir su propio entorno.
3.  **Process (Proceso):** Vigente solo mientras dure la sesión actual de PowerShell. Se pierde al cerrar la ventana.
4.  **CurrentUser/Process combinados:** Se usan a menudo para pruebas rápidas sin tocar la configuración del sistema.

Para ver la política efectiva que está aplicando tu sesión, usa:
```powershell
Get-ExecutionPolicy -List
```
Nota el campo `Scope`. Si ves `LocalMachine` con valor `Restricted`, pero tu usuario tiene `CurrentUser` en `Unrestricted`, la política que se aplicará será la más restrictiva de las dos que afectan a ese contexto. En la práctica, **LocalMachine** suele ser el determinante final en entornos corporativos.

## Errores comunes de quienes empiezan

1.  **Confundir `Bypass` con `Unrestricted`:**
    *   `Unrestricted` permite la ejecución pero muestra una advertencia para scripts descargados de internet.
    *   `Bypass` no muestra advertencias y permite la ejecución de todo, pero **no carga los módulos de perfil ni las variables de entorno de usuario** en algunos contextos de seguridad estricta. Es más peligroso y menos "amigable" que `Unrestricted`.
    *   `RemoteSigned` es el equilibrio ideal: permite scripts locales sin firma, pero exige firma digital para scripts descargados de internet.

2.  **Usar `Set-ExecutionPolicy` sin `-Scope`:**
    Al intentar cambiar la política desde una consola no administrada, el comando falla silenciosamente o aplica solo al alcance actual, dejando la configuración del sistema intacta. Siempre verifica si la consola tiene privilegios de administrador si necesitas cambiar `LocalMachine`.

3.  **Creer que la política detiene el código ofensivo:**
    Un atacante con acceso a tu máquina puede fácilmente cambiar la política a `Bypass` o ejecutar `powershell.exe -ep bypass` si tiene permisos. La política de ejecución es una barrera para usuarios accidentales o scripts mal configurados, **no** para un atacante persistente.

## Cuándo usar y cuándo no usar

*   **Usa `RemoteSigned`:** Es el estándar moderno para la mayoría de los entornos de desarrollo y administración. Permite fluidez local mientras protege contra la ejecución inadvertida de scripts maliciosos descargados.
*   **Usa `AllSigned`:** En entornos de alta seguridad (gobierno, banca). Requiere que **todos** los scripts, incluso los locales, estén firmados por una autoridad de confianza. Es tedioso de gestionar pero seguro.
*   **NO uses `Restricted`:** En máquinas de usuario o desarrollo. Bloquea incluso scripts locales sin firma, rompiendo la usabilidad diaria.
*   **Evita `Unrestricted` en producción:** Las advertencias intermitentes son ignoradas por los usuarios, reduciendo su eficacia.

## Ejemplo extendido: Despliegue de Script Firmado

Imagina que eres administrador de sistemas. Quieres que tu equipo ejecute un script de backup (`backup.ps1`) que descargaron de un repositorio interno.

1.  **Verifica el estado actual:**
    ```powershell
    Get-ExecutionPolicy -List
    ```
    Ves que `LocalMachine` es `RemoteSigned`. Esto es bueno; permite scripts locales y descargados si están firmados.

2.  **Firma el script (si eres el desarrollador):**
    Genera un certificado autofirmado para pruebas (en producción usa PKI):
    ```powershell
    $cert = New-SelfSignedCertificate -DnsName "InternalCA" -CertStoreLocation "Cert:\CurrentUser\My"
    Set-AuthenticodeSignature -FilePath .\backup.ps1 -Certificate $cert
    ```

3.  **Valida la firma:**
    ```powershell
    Get-AuthenticodeSignature .\backup.ps1
    ```
    Debes ver `Status: Valid`.

4.  **Ejecución:**
    Al ejecutar `.\backup.ps1`, PowerShell permitirá la ejecución porque la política `RemoteSigned` acepta scripts descargados si la firma es válida y confiable.

Si la política fuera `AllSigned`, necesitarías que el certificado esté en el almacén de "Autoridades de Certificación Raíz de Confianza" del equipo, no solo en el usuario actual.