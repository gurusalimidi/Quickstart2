import { Component } from '@angular/core';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  {{email}}<br>
  <br>
  {{phone}}<br>
  <br>
  <button (click)="onClickMe()">Click me!</button>
  {{message}}
  <input (keyup)="onKey($event)">
  <p>{{values}}</p>
  `,
})
export class UserComponent{
  name: string;
  email: string;
  phone: number;
  message: string;
  values: '';

  constructor(){
  this.name  = 'World 2';
  this.email = 'hello.world@gmail.com';
  this.phone = 9402200835;
  }

  onClickMe(){
  this.message = 'Thanks for Clicking';
  }

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

}
