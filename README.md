# README

## Ho to run this code

```bash
# clone repository
git clone https://github.com/ruby-treinings/asset_demo.git
cd asset_demo

# install Ruby dependencies with bundler
bundle install

# install JavaScript dependencies with yarn
./bin/yarn

# run Rails server
./bin/rails s

# Open http://localhost:3000 in your browser
```

## Creating new project

```bash
rbenv install 3.1.2
rbenv local 3.1.2

gem update --system --no-doc
gem install rails --version 6.1.7 --no-doc

rails _6.1.7_ new asset_demo --skip-turbolinks --skip-spring
```

## Adding libraries

```bash
yarn add jquery
yarn add jquery-ui
yarn add bootstrap@5.2
yarn add @popperjs/core
```
