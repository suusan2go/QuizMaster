source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.0.2'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'json_world'
gem "omniauth-google-oauth2"
gem 'numbers_in_words'
gem 'redis-rails'
gem 'seed-fu'

group :development, :test do
  gem 'awesome_print'
  gem 'byebug', platform: :mri
  gem 'faker'
  gem 'factory_girl_rails'
  gem 'pry-awesome_print'
  gem 'pry-byebug'
  gem 'pry-doc'
  gem 'pry-rails'
  gem 'pry-stack_explorer'
  gem 'rails_best_practices'
  gem 'rspec-rails'
  gem 'rubocop'
  gem 'tapp'
end

group :development do
  gem 'activerecord-cause'
  gem 'annotate'
  gem 'better_errors'
  gem 'bullet'
  gem 'letter_opener_web'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'capybara'
  gem 'capybara-screenshot'
  gem 'capybara-email'
  gem 'database_rewinder'
  gem 'poltergeist'
  gem 'rspec-json_matcher'
  gem 'rspec_junit_formatter'
  gem 'simplecov'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
