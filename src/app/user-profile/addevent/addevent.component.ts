import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EventService } from '../../shared/event.service';
import { Event} from '../../shared/event.model';
const URL = 'http://localhost:3000/pics';


@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  public selectedEvent = new Event();
  selectedfile: File = null;

  constructor(private http: HttpClient,private router: Router, private eventservice: EventService) { }

  ngOnInit() {
  }
  onfileselect(event) {
    this.selectedfile = <File>event.target.files[0];
  }
  // onSubmit(form: NgForm) {
  //    if (form.value._id === '' || form.value._id == null) {
  //   this.eventservice.insertEvent(this.selectedEvent).
  //   subscribe(
  //     data => console.log('Success', data),
  //     error => console.error('Error', error)
  //   );
  //   alert(' Data Saved Successfully ');
  //   this.router.navigateByUrl('main-nav/ViewEvent');
  //    } else {
  //      console.log(form.value);
  //    }
  //   }
  onSubmit(form: NgForm) {
    form.value.photo = this.selectedfile.name;
    this.selectedEvent.bpic = form.value.photo;
    const fd = new FormData();
    fd.append('image', this.selectedfile, this.selectedfile.name);
    this.http.post('http://localhost:3000/pics', fd).subscribe( res => {
    });
   this.eventservice.insertEvent(this.selectedEvent).
   subscribe(
     data => console.log('Success', data),
     error => console.error('Error', error)
   );
   alert(' Data Saved Successfully ');
   this.router.navigateByUrl('userprofile/ViewEvent');
  }
}
