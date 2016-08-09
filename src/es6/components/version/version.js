import interpolateFilter from './interpolate-filter'
import versionDirective from './version-directive'

export default
  angular.module('starter.version', [
    'starter.version.interpolate-filter',
    'starter.version.version-directive'
  ])
  .value('version', '0.1');
