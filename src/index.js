class API {
    #secure = false;
  
    constructor(url, method = 'GET') {
      this.url = url;
      this.method = method;
      this.#secure = this.url.startsWith('https');
    }
  
    isSecure() {
      return this.#secure;
    }
  
    updateURL(url) {
      this.url = url;
      this.#secure = this.url.startsWith('https');
    }
  }
  

const s = new API('http://api. com/api/hello')
console. log(s. isSecure()) // false

s.updateUrl('https://api. com/api/hello')
console. log(s. isSecure()) // true

console.log(s.url) // https://api. com/api/hello

console.log(s.method) // GET

console.log(s.secure) // undefined (because private field)

  
