
export class View2Controller {
  /**
   * @return {string}
   */
  static get STATE() { return 'main.view2'}

  /**
   * @return {string}
   */
  static get NAME() { return 'View2Controller'}

  static get CONFIG() { return {
    url: '/view2',
    templateUrl: 'templates/view2/view2.html',
    controller: View2Controller.NAME,
    controllerAs: 'vm'
  }}

  constructor(){
    console.log("View2 Controller init")
  }
}