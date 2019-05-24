import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendCommunicationService {

  constructor() { }
  getAllRegions() {
    return 'regions';
  }
}
