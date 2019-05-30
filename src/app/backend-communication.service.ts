import { Injectable } from '@angular/core';
import { services } from './config';
import { HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendCommunicationService {
  urlToBackend = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getServices() {
    return this.http.get(this.urlToBackend + '/services');
      /*.subscribe((res: Response) => {
        this.services1 = res.json();
      });*/
      /*.subscribe((data) => {
        console.log('Received', data);
      });*/
  }
  getCloudTypes() {
    return this.http.get(this.urlToBackend + '/cloudTypes');
  }
}

