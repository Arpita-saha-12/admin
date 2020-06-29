import { Component, OnInit } from '@angular/core';
//import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { ActivatedRoute , Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';
import { Category} from '../../shared/category.model';
import {ProductService } from '../../shared/product.service';
import { BrandService} from '../../shared/brand.service';
import { Brand } from '../../shared/brand.model';
import { Product} from '../../shared/product.model';
const URL = 'http://localhost:3000/pics';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  public id = '';
  public apiurl = 'http://localhost:3000';
  public selectedProduct = new Product();
  public category = [];
  public brand = [];
  selectedfile: File = null;
  //public uploader: FileUploader = new FileUploader({url: URL, productAlias: 'photo'});
  constructor(private route: ActivatedRoute, private router: Router, private catservice: CategoryService ,private brandservice: BrandService,
    private iservice: ProductService, private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getproduct(this.id);
    this.getCategory();
    this.getBrand();
  }
  getproduct(id) {
    this.iservice.getproductid(id).subscribe((res) => {
      this.selectedProduct = res as Product;
      console.log(this.selectedProduct);
    }, (err) => {
      console.log(err);
    });
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
    console.log(this.selectedfile);
  }
  onEdit(form: NgForm) {
    if (confirm('Are you sure to Update this record ?') === true) {
      form.value.photo = this.selectedfile.name;
      this.selectedProduct.ipic = form.value.photo;
      const fd = new FormData();
      fd.append('image', this.selectedfile, this.selectedfile.name);
      this.http.post('http://localhost:3000/pics', fd).subscribe( res => {
      });
      this.iservice.updateProduct(this.selectedProduct).subscribe((res) => {
        console.log(res);
      });
      this.router.navigateByUrl('userprofile/Viewproduct');
    } else {
      this.router.navigate ( [ '/EditCategory', this.id ] );
      this.refresh();
    }
    }
    refresh() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getproduct(this.id);
    }


    getSafeUrl(ipic) {
     return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' + ipic);
  }
}
