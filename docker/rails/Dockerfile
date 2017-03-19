FROM ruby:2.4.0

WORKDIR /app

RUN mkdir -p /app/tmp/cache \
  && mkdir -p /app/tmp/pids \
  && mkdir -p /app/tmp/sockets

RUN apt-get update \
  && apt-get install --yes --no-install-recommends postgresql-client \
     libpq-dev nodejs npm nodejs-legacy \
  && rm -rf /var/lib/apt/lists/* \
  && npm install -g phantomjs-prebuilt

RUN gem install bundler
ENV LANG C.UTF-8
ENV BUNDLE_PATH /bundle
