# README

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
```

## Stylesheets

Change `config/webpacker.yml` and set `extract_css` to true. In `app/views/layout/application.html.erb` change
`stylesheet_link_tag` to `stylesheet_pack_tag`


For propper image loading/referencing from stylesheets

```bash
yarn add css-loader --dev
```

Adjust `additional_paths` in `config/webpacker.yml` as neccessary

