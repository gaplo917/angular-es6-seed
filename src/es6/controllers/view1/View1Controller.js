
export class View1Controller {
  /**
   * @return {string}
   */
  static get STATE() { return 'main.view1'}

  /**
   * @return {string}
   */
  static get NAME() { return 'View1Controller'}

  static get CONFIG() { return {
    url: '/view1',
    templateUrl: 'templates/view1/view1.html',
    controller: View1Controller.NAME,
    controllerAs: 'vm'
  }}

  constructor(LocalStorageService){
    console.log("View1 Controller init")
    const count = LocalStorageService.get('count') || 1

    this.localStorageCount = count
    this.variableScssLocation = '/scss/variables.scss'

    LocalStorageService.set('count', parseInt(count) + 1)

  }
}