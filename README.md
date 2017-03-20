# Setup for development
## Install Docker and Docker Compose
If you using Mac, please install Docker for Max.

[Download Docker for Mac](https://docs.docker.com/docker-for-mac/install/)

## Build Docker images.
Please run setup script below.

```bash
bin/setup
```

This script will do these setups.
* build docker images (postgres, redis, rails, webpack)
* install gems
* install npm packages (using `yarn`)
* rake db:setup
* rake db:seed_fu
* cp .env.sample .env

## Set Oauth Environment Variable
This app uses `.env` file to pass environment variables to docker container. (`.env` will be created in setup script.)
Please update `.env` to your own id and secret. Also, please set callback url to `http://localhost:3000/auth/google/callback`

```bash
GOOGLE_CLIENT_ID=<your google client id>
GOOGLE_CLIENT_SECRET=<your google client secret>
```

## Start App!
```bash
docker-compose up
```
Please access `http://localhost:3000`.

# Tips
## I want to run rails console
```bash
docker-compose run --rm rails bin/rails c
```
## I want to debug using `binding.pry`
```bash
# start app
docker-compose up
# check rails container
docker ps
# attach to rails container
docker attach quizmaster_rails_1
```
## I want to run tests
```
docker-compose run --rm rails bundle exec rspec <target file>
```

If you want to run feature test, you have to build assets before.
```
docker-compose run --rm webpack yarn run prod
```
Or run all tests by run this script

```
bin/spec
```
