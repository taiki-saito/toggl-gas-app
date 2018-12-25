import Constants from './config';

export default class TogglApp {
  apiToken: string;
  headers: {Authorization: string;};
  private apiEndpoint = 'https://www.toggl.com/api/v8';
  private _retries_limit = 3;

  constructor(apiToken: string) {
    this.headers = {Authorization: ' Basic ' + Utilities.base64Encode(apiToken)}
  }

  getUser(){
    return this._get('/me');
  }

  getRunningTimeEntry(){
    return this._get('/time_entries/current');
  }

  getTimeEntriesBetween(startTime: Date, endTime: Date){
    let params = {
      "start_date": startTime.toISOString(),
      "end_date": endTime.toISOString()
    };
    return this._get('/time_entries', params);
  }

  getTimeEntriesOnToday(){
    let now = new Date();
    let startLine = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 21);
    let endLine = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21);
    return this.getTimeEntriesBetween(startLine, endLine);
  }

  protected _get(api: string, resources: {[s: string]: string} = {}): any {
    let query_string_list = []
    let url: string = `${this.apiEndpoint}${api}`;

    for (var key in resources) {
      query_string_list.push(encodeURIComponent(key) + '=' + encodeURIComponent(resources[key]));
    }

    if (query_string_list.length > 0) {
      url += '?' + query_string_list.join('&');
    }

    const params: Object = {
      'method': 'get',
      'headers': {"Authorization" : " Basic " + Utilities.base64Encode(Constants.API_TOKEN + ":api_token")}
    };
    return this._sendRequest(url, params);
  }

  protected _sendRequest(url: string, params: Object = null): any {
    let response: any = null;
    for (let retry: number = 0; retry < this._retries_limit; retry++) {
      try {
        response = UrlFetchApp.fetch(url, params);
      } catch (e) {
        throw e;
      }
      return response;
    }
    throw Error('Try limit over');
  }

}
