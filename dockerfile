# dockerfile

# ----- ステージ1: ビルド環境 -----

# 使用するNode.jsのバージョン
FROM node:18 AS build

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
# TypeScriptのコンパイル
RUN pnpm run build

# ----- ステージ2: 実行環境 -----

# 使用するNode.jsのバージョン
FROM node:18-slim

WORKDIR /app
COPY --from=build /app/package.json /app/pnpm-lock.yaml ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main/index.js"]
