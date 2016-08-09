import * as Controllers from './controllers/index'
import versionModule from './components/version/version'
import controllerModules from './controllers'
import directivesModules from './directives'


// Declare app level module which depends on views, and components
angular.module('starter', [
  'ui.router',
  'ui.materialize',
  'starter.controllers',
  'starter.directives',
  'starter.version',
])
.config(function($stateProvider, $urlRouterProvider) {

  for(let key of Object.keys(Controllers)){
    const controller = Controllers[key]
    $stateProvider.state(controller.STATE,controller.CONFIG)
  }

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main/view1');
});
