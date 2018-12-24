import { API_TOKEN } from './config';

function testRequest(): void {
  let url = 'https://www.toggl.com/api/v8/me';
  let options = {
    method: 'get',
    headers: {"Authorization" : " Basic " + Utilities.base64Encode(API_TOKEN + ":api_token")}
  };
  let result = UrlFetchApp.fetch(url, options);
  console.log(result)
}

class TogglApp {
  apiToken: string;
  headers: {Authorization: string;};
  private const = 'https://www.toggl.com/v8';

  constructor(apiToken: string) {
    this.headers = {Authorization: ' Basic ' + Utilities.base64Encode(apiToken)}
  }

  getUser(){
    return this.get('/me')
  }

  getTimeEntriesByEndTime(){

  }

  getTimeEntriesOnToday(){

  }

  getProject(id: string){

  }

  get(endpoint: string, resource?: {[s: string]: string}): any {

  }

  _sendRequest(): any {

  }

}
