# Imagen de la API de Virtual Book. Se construye desde la raíz del repositorio:
#   docker build -f deploy/docker/api.Dockerfile -t virtualbook-api:<commit> .
#
# Corre igual que hoy en el servidor (`tsx src/index.ts` desde api/): varias rutas leen archivos relativos a src/
# (__dirname y process.cwd(): base/, herramientas/, visualizadores/, assets/, maps/), así que la versión compilada con
# tsc no sirve todavía sin copiar esos archivos a dist/.

FROM node:22.23.3-bookworm-slim AS construccion
# better-sqlite3 compila su parte nativa si no encuentra un binario ya armado.
RUN apt-get update \
 && apt-get install -y --no-install-recommends python3 make g++ ca-certificates \
 && rm -rf /var/lib/apt/lists/*
RUN npm install -g pnpm@12.3.4
WORKDIR /app

# Primero solo los manifiestos: la capa de dependencias se reutiliza mientras no cambie el lockfile.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY api/package.json api/
COPY apps/web/package.json apps/web/
COPY apps/offline/package.json apps/offline/
COPY apps/mobile/package.json apps/mobile/
COPY packages/vblang/ packages/vblang/
RUN pnpm install --frozen-lockfile --filter api...

COPY api/ api/
# `prisma generate` necesita que la variable exista; no se conecta a ninguna base.
RUN cd api && DATABASE_URL="postgresql://construccion@127.0.0.1:1/construccion" npx prisma generate

FROM node:22.23.3-bookworm-slim
ENV NODE_ENV=production
WORKDIR /app/api
COPY --from=construccion --chown=node:node /app /app
# Archivos subidos (MEDIA_STORAGE=local): lib/media-storage.ts los guarda en api/media. Va montado como volumen.
RUN mkdir -p /app/api/media && chown node:node /app/api/media
USER node
EXPOSE 5050
HEALTHCHECK --interval=15s --timeout=3s --start-period=30s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||5050)+'/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node_modules/.bin/tsx", "src/index.ts"]
