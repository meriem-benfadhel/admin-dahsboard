import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data :any;
  constructor(public _auth: AuthService) { }

  ngOnInit(): void {
    this.data = this._auth.getDataFromToken()
  }

}
