import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { appRoutes } from './app.route';
import { AppService} from './app.service';
import { DbconnectService} from './dbconnect.service';
import { HttpModule } from '@angular/http';
import { ProductcartComponent } from './productcart/productcart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ProductlistComponent,
    ProductdetailComponent,
    ProfileComponent,
    NavigationComponent,
    ProductcartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,  
    FormsModule,
    RouterModule.forRoot(appRoutes)  ],
  providers: [AppService,DbconnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

