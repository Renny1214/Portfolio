import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.css']
})
export class WhatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
    })
  }
}
