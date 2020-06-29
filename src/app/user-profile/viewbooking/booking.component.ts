import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../shared/order.service';
import { Order } from '../../shared/order.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public orders = [];
  constructor( private oservice: OrderService) { }

  ngOnInit() {
    this.getorder();
  }
  getorder() {
    this.oservice.getorders().subscribe((res) => {
    this.orders = res as Order[];
    console.log(this.orders);
    });
  }

}
