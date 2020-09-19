// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { FileSelectDirective } from 'ng2-file-upload';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { CategoryService } from './shared/category.service';
import { EventService } from './shared/event.service';
import { ItemService } from './shared/item.service';
import { VwuserService } from './shared/vwuser.service';
import { OrderService } from './shared/order.service';
// import { OrderEventService } from './shared/orderevent.service';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AddcategoryComponent } from './user-profile/addcategory/addcategory.component';
import { ViewcategoryComponent } from './user-profile/viewcategory/viewcategory.component';
import { EditcategoryComponent } from './user-profile/updatecategory/editcategory.component';
import { AddeventComponent } from './user-profile/addevent/addevent.component';
import { VieweventComponent } from './user-profile/viewevent/viewevent.component';
import { EditeventComponent } from './user-profile/updateevent/editevent.component';
import { AdditemComponent } from './user-profile/additem/additem.component';
import { ViewitemComponent } from './user-profile/viewitem/viewitem.component';
import { EdititemComponent } from './user-profile/updateitem/edititem.component';
import { ReguserComponent } from './user-profile/viewreguser/reguser.component';
import { BookingComponent } from './user-profile/viewbooking/booking.component';
import { AboutComponent } from './user-profile/about/about.component';
// import { BookingEventComponent } from './user-profile/vieweventbooking/bookingevent.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    AddcategoryComponent,
    ViewcategoryComponent,
    EditcategoryComponent,
    AddeventComponent,
    VieweventComponent,
    EditeventComponent,
    AdditemComponent,
    ViewitemComponent,
    EdititemComponent,
    //FileSelectDirective,
    ReguserComponent,
    BookingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,Ng2SearchPipeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService , CategoryService, ItemService, VwuserService, OrderService,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
