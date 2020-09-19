import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../shared/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/items';
  getItem() {
    return this.http.get(this.baseURL) ;
  }
  insertItem( item: Item) {
    return this.http.post(this.baseURL, item);
  }
  updateItem(item: Item) {
    return this.http.put(this.baseURL + `/${item._id}`, item);
  }
  deleteItem(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  getitemid(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

}
