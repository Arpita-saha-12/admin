import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { uploads } from '../../../../../shopping-api';
import { ActivatedRoute,Router} from '@angular/router';
import { BrandService } from '../../shared/brand.service';
import { Brand } from '../../shared/brand.model';

declare var  require: any;
@Component({
  selector: 'app-viewbrand',
  templateUrl: './viewbrand.component.html',
  styleUrls: ['./viewbrand.component.css']
})
export class ViewbrandComponent implements OnInit {
  public apiurl = 'http://localhost:3000';
  trustedUrl;
  public id = '';
  public brand = [];
  constructor(private route: ActivatedRoute,private router: Router, private brandservice: BrandService,private sanitizer: DomSanitizer) {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.apiurl);
   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getBrand();
    this.refresh();
  }
  getBrand() {
    this.brandservice.getBrand().subscribe((res) => {
    this.brand = res as Brand[];
    });
  }
  getSafeUrl(bpic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' +bpic);
  }
  refresh() {
    this.brandservice.getBrand().subscribe((res) => {
      this.brand = res as Brand[] ;
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.brandservice.deleteBrand(_id).subscribe((res) => {
      });
      this.refresh();
    }
  }
  onEdit(id) {
    this.router.navigate([ '/userprofile/EditBrand/:id', {id: id} ]);
  }
}

