import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
  }

  submit(form) {
    this.auth.signup(form).subscribe((res) => console.log(res));
  }

}
