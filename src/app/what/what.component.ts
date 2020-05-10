import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.css']
})
export class WhatComponent implements OnInit {
  scrollActive = false;
  constructor(private httpClient: HttpClient,

    private router: Router,
    private formBuilder: FormBuilder) { }
  registerForm: FormGroup;
  submitted = false;

  name;
  email;
  message;
  recieve;

  ngOnInit() {
    AOS.init({
    })


    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]

  });
    } 
    get f() { return this.registerForm.controls; }
    url = "https://rishabh-dev-portfolio.herokuapp.com/mail"

    onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }    
      else
      {
        let json={
          name:this.name,
          message: this.message,
          email : this.email,
          recieve : 'rennymittal1214@gmail.com'
        };
          this.httpClient.post(this.url,json).subscribe((res: any)=>{
              alert("mail sent"+this.name);
          }
          );
      } 
  }
}
