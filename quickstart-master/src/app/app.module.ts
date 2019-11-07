import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent }  from './components/user.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
