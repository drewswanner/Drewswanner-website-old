# Drew Swanner Angular Wordpress Theme
borrowed from: http://king.rocks/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

This is the Angular 9 + Wordpress integrated theme

It was created for my personal website.

Required Plugins:

https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/

https://wordpress.org/plugins/better-rest-api-featured-images/

## Development server

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. The `dist/drewswanner-angular` folder is the full theme build including PHP files. `index.html` needs to be updated after builds with the links to the CSS and script files being populated with the proper path, such as: `wp-content/themes/drewswanner-angular/script.[hash].js`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
