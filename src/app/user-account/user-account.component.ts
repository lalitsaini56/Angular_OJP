import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css',  '../global/css/modal.css']
})
export class UserAccountComponent implements OnInit {

  AccountType: string = "Sign Up";
  constructor() { }

  ngOnInit(): void {
  }

  CloseAccountModel(){

  }

}
