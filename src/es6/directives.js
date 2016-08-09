/**
 * Register the directives
 */
export default
  angular.module('starter.directives', [])

  .directive('compile', ['$compile', ($compile) => {
    return (scope, element, attrs) => {
      scope.$watch(
          (scope) => {
            return scope.$eval(attrs.compile);
          },
          (value) => {
            element.html(value);
            $compile(element.contents())(scope);
          }
      )};
  }])