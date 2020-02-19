import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRef } from 'src/app/window-ref.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}
  title = 'my-app';

  ngOnInit() {
this.router.navigate(['login']);
this.testjquery();
}

private testjquery() {
    try {
      const d = document.createElement('script');
      d.type = 'text/javascript';
      // tslint:disable-next-line: max-line-length
      d.innerHTML = '$(window).bind("load", function(e){close_window = true; $("a").bind("click", function(e){{if(!$(this).hasClass("refresh"))close_window = false;});if (window.addEventListener){window.addEventListener("onbeforeunload","Hey",false);}else{window.attachEvent("onbeforeunload","Hey");}});';
      const head = document.getElementsByTagName('head')[0];
      head.appendChild(d);
    } catch {
    }
  }
}





