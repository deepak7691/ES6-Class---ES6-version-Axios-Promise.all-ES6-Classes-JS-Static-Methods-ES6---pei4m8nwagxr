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
  
  
