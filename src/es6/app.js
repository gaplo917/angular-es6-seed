/**
 * You must import all the separated module into this file
 * Then browserify will include those modules
 */
import versionModule from './components/version/version'
import controllerModules from './controllers'
import directivesModules from './directives'
import serviceModules from './services'

// Get the list of controllers
import * as Controllers from './controllers/index'

// Declare app level module which depends on views, and components
angular.module('starter', [
  'ui.router',
  'ui.materialize',
  'starter.controllers',
  'starter.directives',
  'starter.services',
  'starter.version',
])
.config(function($stateProvider, $urlRouterProvider) {

  // register to ui router
  for(let key of Object.keys(Controllers)){
    const controller = Controllers[key]
    $stateProvider.state(controller.STATE,controller.CONFIG)
  }

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main/view1');
});
