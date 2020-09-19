import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { uploads } from '../../../../../foodPro';
import { Router} from '@angular/router';
import { ItemService } from '../../shared/item.service';
import { Item } from '../../shared/item.model';
// import { Category } from 'src/app/shared/categoty.model';
import { Category } from '../../shared/category.model';
// import { MatTableDataSource } from '@angular/material/table';

declare var  require: any;

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {
  // imgname = require('F:/login/server/uploads/download1.jpg');
  title = 'Custom Search';
  searchText;
  public apiurl = 'http://localhost:3000';
  trustedUrl;
  public items = [];
  // datasource = new MatTableDataSource(this.items);

  constructor(private iservice: ItemService , private sanitizer: DomSanitizer) {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.apiurl);
   }
  getItemdetails() {
    this.iservice.getItem().subscribe((res) => {
    this.items = res as Item[];
    });
  }
  getSafeUrl(ipic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' +ipic);
}
  ngOnInit() {
    this.getItemdetails();
  }

  refresh() {
    this.iservice.getItem().subscribe((res) => {
      this.items = res as Item[] ;
    });
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.iservice.deleteItem(_id).subscribe((res) => {
      });
      this.refresh();
    }
  }

  // applyFilter(filterValue:string) {
  //   this.datasource.filter= filterValue.trim().toLowerCase();
  // }
}
