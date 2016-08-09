export class BaseController {
  /**
   * @return {string}
   */
  static get STATE() {
    return 'main'
  }

  /**
   * @return {string}
   */
  static get NAME() {
    return 'SlideBarController'
  }

  static get CONFIG() {
    return {
      url: '/main',
      abstract: true,
      templateUrl: 'templates/main.html',
      controller: BaseController.NAME,
      controllerAs: 'vm'
    }
  }

  constructor($state){

    this.state = $state
    console.log(`BaseController init, state =`,this.state.current)

  }
}