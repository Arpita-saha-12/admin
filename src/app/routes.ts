import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddcategoryComponent } from './user-profile/addcategory/addcategory.component';
import { ViewcategoryComponent } from './user-profile/viewcategory/viewcategory.component';
import { EditcategoryComponent } from './user-profile/updatecategory/editcategory.component';
import { AddeventComponent } from './user-profile/addevent/addevent.component';
import { VieweventComponent } from './user-profile/viewevent/viewevent.component';
import { EditeventComponent } from './user-profile/updateevent/editevent.component';
import { AdditemComponent } from './user-profile/additem/additem.component';
import { ReguserComponent } from './user-profile/viewreguser/reguser.component';
import { BookingComponent } from './user-profile/viewbooking/booking.component';
// import { BookingEventComponent } from './user-profile/vieweventbooking/bookingevent.component';
import { ViewitemComponent} from './user-profile/viewitem/viewitem.component';
import { EdititemComponent } from './user-profile/updateitem/edititem.component';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent} from './user-profile/about/about.component';


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
        { path: 'AddEvent', component: AddeventComponent  },
        { path: 'ViewEvent', component: VieweventComponent },
        { path: 'EditEvent/:id', component : EditeventComponent},
        { path: 'AddItem', component: AdditemComponent},
        { path: 'ViewItem', component: ViewitemComponent},
        { path: 'EditItem/:id', component: EdititemComponent },
        { path: 'reguser', component: ReguserComponent},
        { path: 'booking' , component: BookingComponent},
        {path: 'about' , component: AboutComponent},

        // { path: 'bookingevent' , component: BookingEventComponent}

    ]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
