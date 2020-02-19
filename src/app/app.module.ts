import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './core/auth.service';
import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { environment } from 'src/environments/environment';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { WindowRef } from './window-ref.service';
import { FormsModule } from '@angular/forms';
import { ProductscomponentComponent } from './productscomponent/productscomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersLoginComponent,
    UserProfileComponent,
    ProductscomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductscomponentComponent]
})
export class AppModule { }
