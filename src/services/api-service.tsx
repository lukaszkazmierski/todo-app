export interface IApiService {
  post(url: string, body: any);
  get(url: string);
  put(url: string, body: any);
  delete(url: string);
}

export class ApiService implements IApiService {
  private readonly headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  post(url: string, body: any): Promise<any> {
    return fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    });
  }

  get(url: string): Promise<any> {
    return fetch(url, {
      method: 'GET',
      headers: this.headers,
    });
  }

  put(url: string, body: any): Promise<any> {
    return fetch(url, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(body),
    });
  }

  delete(url: string): Promise<any> {
    return fetch(url, {
      method: 'DELETE',
      headers: this.headers,
    });
  }
}
