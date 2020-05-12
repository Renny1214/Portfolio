import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data = {
    name: null,
    email: null,
    message: null,
    recieve: 'rennymittal1214@gmail.com'
  }

  showAlert = false;
  showError = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  //retrive data
  getName(event) {
    this.data.name = event.target.value;
  }
  getEmail(event) {
    this.data.email = event.target.value;
  }
  getMessage(event) {
    this.data.message = event.target.value;
  }

  //send form
  sendMessage() {
    const url = 'https://rishabh-dev-portfolio.herokuapp.com/mail';

    if (this.isValidated()) {
      this.httpClient.post(url, this.data).subscribe((res: any) => {
        this.showAlert = true;
      });
    }
    else{
      this.showError = true;
    }
  }

  isValidated() {
    if(this.data.name != null && this.data.email != null && this.data.message != null && 
      this.data.name != '' && this.data.email != '' && this.data.message != '') {
      return true;
    }

    return false;
  }

  resetAlert() {
    this.showAlert = false;
    this.showError = false;
  }

}
