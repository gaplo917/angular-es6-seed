/**
 * Created by Gaplo917 on 9/1/2016.
 * Store the key-value pair to client browser
 */
  
export class LocalStorageService {
  /**
   * @return {string}
   */
  static get NAME() { return 'LocalStorageService'}

  static get DI() {
    return ($window) => new LocalStorageService($window)
  }

  constructor($window) {
    this.window = $window
    this.cache = new Map()
  }

  set(key, value) {
    this.cache.set(key,value)
    if(value == undefined){
      delete this.window.localStorage[key]
    }
    else {
      this.window.localStorage[key] = value;
    }
  }
  
  get(key, defaultValue) {
    const values = this.cache.get(key)
    if(!values){
      console.log('get initilize this.cache',key)
      this.cache.set(key, this.window.localStorage[key] || defaultValue || 'undefined')
    }
    const cachedVal = this.cache.get(key)
    return cachedVal === 'undefined' ? undefined : cachedVal
  }
  
  setObject(key, value) {
    this.cache.set(key,value)
    if(value == undefined){
      delete this.window.localStorage[key]
    }
    else {
      this.window.localStorage[key] = JSON.stringify(value);
    }
  }
  
  getObject(key) {
    const values = this.cache.get(key)
    if(!values){
      console.log('getObject initilize this.cache')
      this.cache.set(key, JSON.parse(this.window.localStorage[key] || '{}'))
    }
    return this.cache.get(key);
  }
}
    
