import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BrandService } from '../../shared/brand.service';
import { Brand} from '../../shared/brand.model';

@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.css']
})
export class EditbrandComponent implements OnInit {

  public selectedBrand = new Brand();
  public id = '';
  constructor(private route: ActivatedRoute, private router: Router, private brandservice: BrandService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getBrand(this.id);
  }
  getBrand(id) {
      this.brandservice.getbrandid(id).subscribe((res) => {
        this.selectedBrand = res as Brand;
        console.log(this.selectedBrand);
      }, (err) => {
        console.log(err);
      });
  }
  onEdit(form: NgForm) {
    if (confirm('Are you sure to Update this record ?') === true) {
      this.brandservice.updateBrand(form.value).subscribe((res) => {
        console.log(res);
      });
      this.router.navigateByUrl('userprofile/ViewBrand');
    } else {
      this.router.navigate ( [ '/EditBrand', this.id ] );
      this.refresh();
    }
    }
    refresh() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getBrand(this.id);
    }
}

