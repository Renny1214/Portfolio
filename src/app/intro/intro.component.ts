import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
    })
    this.hello();
    } 

   hello()
   {
    const el = document.getElementById("module");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX +"px";
  el.style.backgroundPositionY = -e.offsetY +"px";
});
   } 

}
