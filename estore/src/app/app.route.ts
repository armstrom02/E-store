import { RouterModule,Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProfileComponent } from './profile/profile.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductcartComponent } from './productcart/productcart.component';
export const appRoutes: Routes = [
    
     { path: '', component: HomeComponent },
     { path: 'Home', component: HomeComponent },
     { path: 'signup', component: SignupComponent },
     { path: 'profile', component: ProfileComponent },
     { path: 'login', component: LoginComponent },
     { path: 'productlist/:user', component: ProductlistComponent },
     { path: 'productlist', component: ProductlistComponent }, 
     { path: 'productdetail/:name/:imageurl/:price', component: ProductdetailComponent },   
     { path: '',redirectTo: 'Home', pathMatch: 'full' },
     { path: 'nav/:user', component: NavigationComponent },
     { path: 'productcart', component: ProductcartComponent },
     
  ];

  export const routingComponents =[ProductlistComponent,ProductdetailComponent]

  