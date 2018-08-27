FROM ruby:2.5


WORKDIR /usr/src/app

RUN bundle config --global frozen 1
RUN bundle install

COPY . .

EXPOSE 8000
#CMD ["rails", "db:create"]
#CMD ["rails", "db:migrate"]
#CMD ["rails", "s"]
