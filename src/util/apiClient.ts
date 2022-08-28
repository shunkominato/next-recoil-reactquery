import axios, { AxiosResponse } from 'axios';

class ApiClient {
  constructor() {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  // eslint-disable-next-line class-methods-use-this
  private _setToken() {
    console.log('set token');
  }

  get({ uri, params }: { uri: string; params?: object }): Promise<AxiosResponse> {
    this._setToken();

    return axios.get(uri, { params });
  }
}

export default new ApiClient();
