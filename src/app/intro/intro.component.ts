import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  scrollActive = false;
  constructor() { }

  ngOnInit() {
    AOS.init({
    })
    this.hello();
    this.scrollEvent();
    } 

   hello()
   {
    const el = document.getElementById("module");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX +"px";
  el.style.backgroundPositionY = -e.offsetY +"px";
});
   } 
   scrollEvent() {
    let button = document.getElementById("scrollBtn");

    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        button.style.opacity = "0.5";
        button.style.cursor = "pointer";
        this.scrollActive = true;
      } else {
        button.style.opacity = "0";
        button.style.cursor = "default";
        this.scrollActive = false;
      }
    });
  }

  toTop() {
    if (this.scrollActive) {
      let scroll = window.pageYOffset;

      let interval = setInterval(() => {
        scroll = scroll - 100;
        window.scrollTo(0, scroll);

        if (scroll <= 20) {
          clearInterval(interval);
        }
      }, 5);
    }
  }

   
}
