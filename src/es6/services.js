import * as Services from './services/index'

/**
 * Register the service
 */
const serviceModules = angular.module('starter.services', [])

for(let key of Object.keys(Services)){
  const service = Services[key]
  serviceModules.factory(service.NAME,service.DI)
}
