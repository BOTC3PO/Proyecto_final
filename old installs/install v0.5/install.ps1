powershell -ExecutionPolicy Bypass -File .\new-fullstack.ps1 -ProjectName MiApp `
  -MongoMode native `
  -MongoPort 27018 `
  -NativeDbDir "D:\datos\mongo\MiApp\data" `
  -NativeLogDir "D:\datos\mongo\MiApp\log"
