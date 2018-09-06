FROM ruby:2.5


WORKDIR /usr/src/app


COPY . .
RUN bundle install


EXPOSE 8000
CMD ["rails", "db:create"]
CMD ["rails", "db:migrate"]
CMD ["rails", "s"]
