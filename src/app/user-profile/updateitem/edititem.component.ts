import { Component, OnInit } from '@angular/core';
//import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { ActivatedRoute , Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';
import { Category} from '../../shared/category.model';
import {ItemService } from '../../shared/item.service';
import { Item} from '../../shared/item.model';
const URL = 'http://localhost:3000/pics';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
  public id = '';
  public apiurl = 'http://localhost:3000';
  public selectedItem = new Item();
  public category = [];
  selectedfile: File = null;
  //public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(private route: ActivatedRoute, private router: Router, private catservice: CategoryService ,
    private iservice: ItemService, private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getitem(this.id);
    this.getCategory();
  }
  getitem(id) {
    this.iservice.getitemid(id).subscribe((res) => {
      this.selectedItem = res as Item;
      console.log(this.selectedItem);
    }, (err) => {
      console.log(err);
    });
  }

  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
      this.category = res as Category[];
      });
  }
  onfileselect(event) {
    this.selectedfile = <File>event.target.files[0];
    console.log(this.selectedfile);
  }
  onEdit(form: NgForm) {
    if (confirm('Are you sure to Update this record ?') === true) {
      form.value.photo = this.selectedfile.name;
      this.selectedItem.ipic = form.value.photo;
      const fd = new FormData();
      fd.append('image', this.selectedfile, this.selectedfile.name);
      this.http.post('http://localhost:3000/pics', fd).subscribe( res => {
      });
      this.iservice.updateItem(this.selectedItem).subscribe((res) => {
        console.log(res);
      });
      this.router.navigateByUrl('userprofile/ViewItem');
    } else {
      this.router.navigate ( [ '/EditCategory', this.id ] );
      this.refresh();
    }
    }
    refresh() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getitem(this.id);
    }


    getSafeUrl(ipic) {
     return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' + ipic);
  }
}
