import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddcategoryComponent } from './user-profile/addcategory/addcategory.component';
import { ViewcategoryComponent } from './user-profile/viewcategory/viewcategory.component';
import { EditcategoryComponent } from './user-profile/updatecategory/editcategory.component';
import { AddbrandComponent } from './user-profile/addbrand/addbrand.component';
import { ViewbrandComponent } from './user-profile/viewbrand/viewbrand.component';
import { EditbrandComponent } from './user-profile/updatebrand/editbrand.component';
import { AddproductComponent } from './user-profile/addproduct/addproduct.component';
import { ReguserComponent } from './user-profile/viewreguser/reguser.component';
import { BookingComponent } from './user-profile/viewbooking/booking.component';
import { ViewproductComponent} from './user-profile/viewproduct/viewproduct.component';
import { EditproductComponent } from './user-profile/updateproduct/editproduct.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard],
        children: [{ path: 'AddCategory', component: AddcategoryComponent  },
        { path: 'ViewCategory', component: ViewcategoryComponent },
        { path: 'EditCategory/:id', component : EditcategoryComponent},
        { path: 'AddBrand', component: AddbrandComponent  },
        { path: 'ViewBrand', component: ViewbrandComponent },
        { path: 'EditBrand/:id', component : EditbrandComponent},
        { path: 'AddProduct', component: AddproductComponent},
        { path: 'ViewProduct', component: ViewproductComponent},
        { path: 'EditProduct/:id', component: EditproductComponent },
        { path: 'reguser', component: ReguserComponent},
        { path: 'booking' , component: BookingComponent}
    ]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
