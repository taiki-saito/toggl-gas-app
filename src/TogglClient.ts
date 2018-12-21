function testRequest(): void {
  let url = 'https://www.toggl.com/api/v8/me';
  let options = {
    method: 'get',
    headers: {"Authorization" : " Basic " + Utilities.base64Encode("51135b1325b711d9e4a594c30ed5ce52:api_token")}
  };
  let result = UrlFetchApp.fetch(url, options);
  console.log(result)
}

class TogglApp {
  apiToken: string;
  headers: {Authorization: string;};
  private const = 'https://api.chatwork.com/v8';

  constructor(apiToken: string) {
    this.headers = {Authorization: ' Basic ' + Utilities.base64Encode(apiToken)}
  }

  getUser(): any {

  }

  getTimeEntriesByEndTime(): any {

  }

  getTimeEntriesOnToday(): any {

  }

  getProject(id: string): any {

  }

  get(endpoint: string, resource: {[s: string]: string}): any {
    
  }

  _sendRequest(): any {

  }

}
