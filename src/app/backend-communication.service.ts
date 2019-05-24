import { Injectable } from '@angular/core';
import {services} from './config';

@Injectable({
  providedIn: 'root'
})
export class BackendCommunicationService {

  constructor() { }
  getServices() {
    return services;
  }
}

