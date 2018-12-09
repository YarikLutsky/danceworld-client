import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profileImgSrc: String;
  constructor() {
    this.profileImgSrc = 'assets/images/anonymouse.png';
  }

  ngOnInit() {
  }

}
