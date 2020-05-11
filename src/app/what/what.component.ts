import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.css']
})
export class WhatComponent implements OnInit {
  scrollActive = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    AOS.init({
    })
    }
}
