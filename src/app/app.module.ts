// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ProductService} from './shared/product.service';
import { VwuserService} from './shared/vwuser.service';
import { OrderService } from './shared/order.service';
import { BrandService } from './shared/brand.service';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AddcategoryComponent } from './user-profile/addcategory/addcategory.component';
import { ViewcategoryComponent } from './user-profile/viewcategory/viewcategory.component';
import { EditcategoryComponent } from './user-profile/updatecategory/editcategory.component';
import { AddbrandComponent } from './user-profile/addbrand/addbrand.component';
import { ViewbrandComponent } from './user-profile/viewbrand/viewbrand.component';
import { EditbrandComponent } from './user-profile/updatebrand/editbrand.component';
import { AddproductComponent } from './user-profile/addproduct/addproduct.component';
import { ViewproductComponent } from './user-profile/viewproduct/viewproduct.component';
import { EditproductComponent } from './user-profile/updateproduct/editproduct.component';
import { ReguserComponent } from './user-profile/viewreguser/reguser.component';
import { BookingComponent } from './user-profile/viewbooking/booking.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AuthService } from "./shared/auth.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


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
    AddproductComponent,
    ViewproductComponent,
    EditproductComponent,
    EditbrandComponent,
    ViewbrandComponent,
    AddbrandComponent,
    //FileSelectDirective,
    ReguserComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    Ng2SearchPipeModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [
    MatInputModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService , CategoryService, ProductService, VwuserService, OrderService,BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
