import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Event } from '../shared/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/events';
  getEvent() {
    return this.http.get(this.baseURL) ;
  }
  insertEvent( event: Event) {
    return this.http.post(this.baseURL, event);
  }
  updateEvent(event: Event) {
    return this.http.put(this.baseURL + `/${event._id}`, event);
  }
  deleteEvent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  geteventid(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

}
