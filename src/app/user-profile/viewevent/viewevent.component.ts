import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { uploads } from '../../../../../foodPro';
import { ActivatedRoute,Router} from '@angular/router';
import { EventService } from '../../shared/event.service';
import { Event } from '../../shared/event.model';

declare var  require: any;
@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class VieweventComponent implements OnInit {
  public apiurl = 'http://localhost:3000';
  trustedUrl;
  public id = '';
  public event = [];
  constructor(private route: ActivatedRoute,private router: Router, private eventservice: EventService,private sanitizer: DomSanitizer) {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.apiurl);
   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getEvent();
    this.refresh();
  }
  getEvent() {
    this.eventservice.getEvent().subscribe((res) => {
    this.event = res as Event[];
    });
  }
  getSafeUrl(bpic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' +bpic);
  }
  refresh() {
    this.eventservice.getEvent().subscribe((res) => {
      this.event = res as Event[] ;
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.eventservice.deleteEvent(_id).subscribe((res) => {
      });
      this.refresh();
    }
  }
  onEdit(id) {
    this.router.navigate([ '/userprofile/EditEvent/:id', {id: id} ]);
  }
}

