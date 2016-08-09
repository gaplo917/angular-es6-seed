import * as Controllers from './controllers/index'

/**
 * Register the controllers
 */
const controllerModules = angular.module('starter.controllers', [])

for(let key of Object.keys(Controllers)){
  const controller = Controllers[key]
  controllerModules.controller(controller.NAME,controller)
}

export default controllerModules