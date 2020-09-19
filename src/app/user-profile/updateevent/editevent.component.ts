import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EventService } from '../../shared/event.service';
import { Event} from '../../shared/event.model';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent implements OnInit {

  public selectedEvent = new Event();
  public id = '';
  constructor(private route: ActivatedRoute, private router: Router, private eventservice: EventService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getEvent(this.id);
  }
  getEvent(id) {
      this.eventservice.geteventid(id).subscribe((res) => {
        this.selectedEvent = res as Event;
        console.log(this.selectedEvent);
      }, (err) => {
        console.log(err);
      });
  }
  
  onEdit(form: NgForm) {
    if (confirm('Are you sure to Update this record ?') === true) {
      this.eventservice.updateEvent(form.value).subscribe((res) => {
        console.log(res);
      });
      this.router.navigateByUrl('userprofile/ViewEvent');
    } else {
      this.router.navigate ( [ '/EditEvent', this.id ] );
      this.refresh();
    }
    }
    refresh() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getEvent(this.id);
    }
}

