import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
    })
    window.addEventListener("load", () => {
      if (this.checkTech(this.skills)) {
        this.displaySkills();
      }
    });
  }

  skills = "technical";
  className = "custom-bg";

  technicalSkills1 = [
    {
      name: "java",
      level: 90
    },
    {
      name: "c",
      level: 50
    },
    {
      name: "c++",
      level: 50
    },
    {
      name: "javascript",
      level: 75
    },
    {
      name: "typescript",
      level: 75
    },
    {
      name: "angular",
      level: 75
    },
    {
      name: "css",
      level: 90
    },
    {
      name: "html",
      level: 90
    }
  ];
  technicalSkills2 = [
    {
      name: "bootstrap",
      level: 90
    },
    {
      name: "springboot",
      level: 80
    },
    {
      name: "hibernate",
      level: 70
    },
    {
      name: "native android",
      level: 25
    },
    {
      name: "electron",
      level: 25
    },
    {
      name: "oracle",
      level: 50
    },
    {
      name: "mysql",
      level: 90
    },
    {
      name: "mongodb",
      level: 25
    }
  ];

 
  checkTech(skill) {
    if (skill == "technical") {
      return true;
    }

    return false;
  }

  displaySkills() {
    for (let i = 0; i < this.technicalSkills1.length; i++) {
      this.getSkills(
        this.technicalSkills1[i].name,
        this.technicalSkills1[i].level
      );
      this.getSkills(
        this.technicalSkills2[i].name,
        this.technicalSkills2[i].level
      );
    }
  }

  getSkills(id, level) {
    let bar = document.getElementById(id);
    let width = 0;

    let interval = setInterval(() => {
      if (width == level - 1) {
        clearInterval(interval);
      }

      width += 1;
      bar.style.width = width + "%";
    }, 5);
  }

  showSkills(skill) {
    let button = document.getElementById(skill);

    if (skill != this.skills) {
      document.getElementById(this.skills).classList.remove(this.className);
      this.skills = skill;
      document.getElementById(skill).classList.add(this.className);
    }
  }
}



