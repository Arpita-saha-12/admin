import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Brand } from '../shared/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/brands';
  getBrand() {
    return this.http.get(this.baseURL) ;
  }
  insertBrand( brand: Brand) {
    return this.http.post(this.baseURL, brand);
  }
  updateBrand(brand: Brand) {
    return this.http.put(this.baseURL + `/${brand._id}`, brand);
  }
  deleteBrand(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  getbrandid(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

}
