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
  
  const s = new API('http://api.com/api/hello');
  console.log(s.isSecure()); 
  
  s.updateURL('https://api.com/api/hello');
  console.log(s.isSecure()); 
  
  console.log(s.url); 
  console.log(s.method);
  console.log(s.secure); 
