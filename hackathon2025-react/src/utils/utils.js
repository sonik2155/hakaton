class Api { 
    constructor(options) { 
      this._url = options.url;  
      this._contentType = options.headers["Content-type"]; 
    } 

 getPoetry() {
    return fetch (`${this._url}`, {
        method: 'GET'
    })
    .then((res) => {
        return res.json();
    })
    .catch((res) => {
        return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
    })
}
}

export  const api = new Api({ 
    url: 'http://buymebuyme.xyz',
    headers: { 
        "Content-type": "application/json", 
      }, 
    }); 

export default api;

