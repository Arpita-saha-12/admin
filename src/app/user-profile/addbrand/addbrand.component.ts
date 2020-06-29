import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BrandService } from '../../shared/brand.service';
import { Brand} from '../../shared/brand.model';
const URL = 'http://localhost:3000/pics';


@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {

  public selectedBrand = new Brand();
  selectedfile: File = null;

  constructor(private http: HttpClient,private router: Router, private brandservice: BrandService) { }

  ngOnInit() {
  }
  onfileselect(event) {
    this.selectedfile = <File>event.target.files[0];
  }
  // onSubmit(form: NgForm) {
  //    if (form.value._id === '' || form.value._id == null) {
  //   this.brandservice.insertBrand(this.selectedBrand).
  //   subscribe(
  //     data => console.log('Success', data),
  //     error => console.error('Error', error)
  //   );
  //   alert(' Data Saved Successfully ');
  //   this.router.navigateByUrl('main-nav/ViewBrand');
  //    } else {
  //      console.log(form.value);
  //    }
  //   }
  onSubmit(form: NgForm) {
    form.value.photo = this.selectedfile.name;
    this.selectedBrand.bpic = form.value.photo;
    const fd = new FormData();
    fd.append('image', this.selectedfile, this.selectedfile.name);
    this.http.post('http://localhost:3000/pics', fd).subscribe( res => {
    });
   this.brandservice.insertBrand(this.selectedBrand).
   subscribe(
     data => console.log('Success', data),
     error => console.error('Error', error)
   );
   alert(' Data Saved Successfully ');
   this.router.navigateByUrl('userprofile/ViewBrand');
  }
}
