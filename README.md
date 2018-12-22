#### Editorconfig
This project have .editorconfig file at the root that used by your code editor with editorconfig plugin. It describes codestyle like indent style, trailing whitespaces etc. See more details [here](http://editorconfig.org/)

## Site configuration
This boilerplate use Pug templates with external data configs. 
Main settings can be found in `dev/data/config.json` file. And they're available for usage in templates with `config.key-name`

## Tasks
Here comes groups of gulp tasks with some explanations

#### Start 
Install bower dependencies and place them to dev folders.
Gulp: `gulp start`

* Install bower components
* Copy bower components to dev folder
* Remove gitkeep files

#### Dev
Dev task with static server.
Gulp: `gulp dev`

* Concatenate javascripts
* Compile Sass stylesheets
* Add vendor prefixes in css
* Combine media queries in css files
* Compile Pug templates
* Sync helpers and other assets
* Sync images
* Run BrowserSync static server with live reload using 
* Watch for changes and run dev task


#### Build 
Build task.
Gulp: `gulp build`

* Minify images
* Minify javascript files
* Minify stylesheets
* Minify html
* Run BrowserSync static server 


#### Rebuild 
Regenerate and build project by running all tasks.
Gulp: `gulp rebuild`

* Concatenate javascripts
* Compile Sass stylesheets
* Add vendor prefixes in css
* Combine media queries in css files
* Compile Pug templates
* Sync helpers and other assets
* Sync images
* Minify images
* Minify javascript files
* Minify stylesheets
* Minify html

#### Server 
Run server without watching for changes.
Gulp: `gulp server`

* Run BrowserSync static server

## Live reload 
This project uses BrowserSync as static server with enabled and configured live reload option.

## License
[MIT](https://github.com/website-templates/portfolio_one-page-template/blob/master/LICENSE.md)
=======
# portfolio-gulp-web
