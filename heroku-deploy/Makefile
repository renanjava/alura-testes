docker-image-build: package
    @ docker build -t example/example-api .

run: docker-image-build
    @ docker-compose up -d

stop: 
    @ docker-compose down -v

deploy: docker-image-build
    @ docker login --username=_ --password=$$(heroku auth:token) registry.heroku.com
    @ docker image tag example/example-api:latest registry.heroku.com/example-teste/web:1
    @ docker image push registry.heroku.com/example-teste/web:1
    @ make deploy_on_heroku IMAGE_ID=$$(docker image inspect registry.heroku.com/example-teste/web:1 -f {{.Id}})

deploy_on_heroku:
    @ curl -X PATCH \
            -H "Authorization: Bearer $$(heroku auth:token)" \
            -H "Content-Type: application/json" \
            -H "Accept:application/vnd.heroku+json; version=3.docker-releases" \
            -d '{ "updates": [{"type": "web",  "docker_image": "$(IMAGE_ID)"}] }' \
            https://api.heroku.com/apps/example-teste/formation