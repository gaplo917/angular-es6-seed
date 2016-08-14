# angular-es6-seed — A starter project for AngularJS with ES6 Browserify Babel Sass

TODO, Add Test

## Getting Started

To get you started you can simply clone the angular-es6-seed repository and install the dependencies:

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
bower install
// we need gulp to build/ serve for speeding development
npm install gulp -g
```
### Run the Application with auto re-build & live reload
```
gulp run
```
It will watch the change of `src/es6/**/*.js` and `src/sass/**/**` and build automatically then live reload.

### Read the gulpFile for more commands to use

For example:
```
gulp browserify
gulp sass
gulp watch
gulp release
```


