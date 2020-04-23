import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.css']
})
export class ScrollBarComponent implements OnInit {
scrollActive = false;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.scrollEvent();
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
    }, 10);
  }
}

}
