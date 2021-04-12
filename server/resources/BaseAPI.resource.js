// wrote this many years ago
const axios = require('axios');

// BaseResource class for all of the other resources to inherit from
class BaseResource {
  constructor() {
    this.baseApiUrl = `${process.env.RAILS_API_URL}`;
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  _request(url, method, headers, withCreds, body, responseType) {
    const _headers = headers || this.headers;

    const options = {
      url,
      method,
      headers: _headers,
      withCredentials: withCreds,
      data: body,
    };

    if (responseType) {
      options.responseType = responseType;
    }

    return axios(options)
      .then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((error) => {
        console.log('error from the API:', error.response);
        return Promise.reject(error.response.data);
      });
  }

  // simple wrapper for axios - syntactic sugar
  // body and withCreds are optional
  post(url, headers, withCreds, body) {
    return this._request(url, 'POST', headers, withCreds, body);
  }

  // simple wrapper for axios - changed it to fetch since "get" is a keyword
  fetch(url, headers, withCreds, responseType) {
    return this._request(url, 'GET', headers, withCreds, null, responseType);
  }

  // simple wrapper for axios - more syntactic sugar
  put(url, headers, withCreds, body) {
    return this._request(url, 'PUT', headers, withCreds, body);
  }

  // simple wrapper for axios - more syntactic sugar
  patch(url, headers, withCreds, body) {
    return this._request(url, 'PATCH', headers, withCreds, body);
  }

  // simple wrapper for axios - more syntactic sugar
  delete(url, headers, withCreds = false, body = null) {
    return this._request(url, 'DELETE', headers, withCreds, body);
  }
}

module.exports = BaseResource;
