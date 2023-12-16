# Makefile

dev:
	pnpm run build
	pnpm run dev

# Docker Composeを使用してイメージをビルドし、サービスを起動
up:
	pnpm run build
	docker compose build --no-cache
	docker compose up

# Docker Composeを使用してサービスを停止
down:
	docker compose down

# Docker Composeを使用してサービスを停止し、関連するリソースとImageを削除
clean:
	docker compose down --volumes --remove-orphans

db insight:
	docker exec -it gpts-teacher-db-1 bash

# psql -U postgres