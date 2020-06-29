import { Component, OnInit } from '@angular/core';
//import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../shared/product.service';
import { CategoryService} from '../../shared/category.service';
import { Category } from '../../shared/category.model';
import { BrandService} from '../../shared/brand.service';
import { Brand } from '../../shared/brand.model';
import { Product} from '../../shared/product.model';
const URL = 'http://localhost:3000/pics';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public selectedProduct = new Product();
  public category = [];
  public brand = [];
  selectedfile: File = null;
  //public uploader: FileUploader = new FileUploader({url: URL, productAlias: 'photo'});
  constructor(private http: HttpClient, private router: Router, private catservice: CategoryService, private brandservice: BrandService, private productservice: ProductService) { }
  ngOnInit() {
    this.getCategory();
    this.getBrand();
  }
  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }
  getBrand() {
    this.brandservice.getBrand().subscribe((res) => {
    this.brand = res as Brand[];
    });
  }
  onfileselect(event) {
    this.selectedfile = <File>event.target.files[0];
  }
  onSubmit(form: NgForm) {
    form.value.photo = this.selectedfile.name;
    this.selectedProduct.ipic = form.value.photo;
    const fd = new FormData();
    fd.append('image', this.selectedfile, this.selectedfile.name);
    this.http.post('http://localhost:3000/pics', fd).subscribe( res => {
    });
   this.productservice.insertProduct(this.selectedProduct).
   subscribe(
     data => console.log('Success', data),
     error => console.error('Error', error)
   );
   alert(' Data Saved Successfully ');
   this.router.navigateByUrl('userprofile/Viewproduct');
  }

}
