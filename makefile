# Makefile

dev:
	pnpm run build
	node dist/main/index.js

# Docker Composeを使用してイメージをビルドし、サービスを起動
up:
	docker compose build --no-cache
	docker compose up

# Docker Composeを使用してサービスを停止
down:
	docker compose down

# Docker Composeを使用してサービスを停止し、関連するリソースを削除
clean:
	docker compose down --volumes --remove-orphans

