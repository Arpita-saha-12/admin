import { Component, OnInit } from '@angular/core';
//import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ItemService } from '../../shared/item.service';
import { CategoryService} from '../../shared/category.service';
import { Category } from '../../shared/category.model';
import { Item} from '../../shared/item.model';
const URL = 'http://localhost:3000/pics';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  public selectedItem = new Item();
  public category = [];
  selectedfile: File = null;
  //public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(private http: HttpClient, private router: Router, private catservice: CategoryService, private itemservice: ItemService) { }
  ngOnInit() {
    this.getCategory();
  }
  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }
  onfileselect(event) {
    this.selectedfile = <File>event.target.files[0];
  }
  onSubmit(form: NgForm) {
    form.value.photo = this.selectedfile.name;
    this.selectedItem.ipic = form.value.photo;
    const fd = new FormData();
    fd.append('image', this.selectedfile, this.selectedfile.name);
    this.http.post('http://localhost:3000/pics', fd).subscribe( res => {
    });
   this.itemservice.insertItem(this.selectedItem).
   subscribe(
     data => console.log('Success', data),
     error => console.error('Error', error)
   );
   alert(' Data Saved Successfully ');
   this.router.navigateByUrl('userprofile/ViewItem');
  }

}
