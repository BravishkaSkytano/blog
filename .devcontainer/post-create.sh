#!/usr/bin/env bash

# Install Ruby for Ruby LSP plugin
rvm install "ruby-$(<.ruby-version)"

# Install dependencies for project
bundle install

# Run project, including --force_polling to resolve hot reload issues
# bundle exec jekyll serve --livereload --force_polling
