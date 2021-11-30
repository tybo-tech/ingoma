import { Component, OnInit } from '@angular/core';
import { User } from 'src/models';

@Component({
  selector: 'app-sell-with-us',
  templateUrl: './sell-with-us.component.html',
  styleUrls: ['./sell-with-us.component.scss']
})
export class SellWithUsComponent implements OnInit {
  user: User;
  showForm: boolean;
  constructor() { }

  ngOnInit() {
    this.user = {
      UserId: '',
      CompanyId: '',
      UserType: 'Admin',
      Name: '',
      Surname: '',
      Email: '',
      PhoneNumber: '',
      Password: 'notset',
      Dp: '',
      CreateUserId: 'sign-up-shop',
      ModifyUserId: 'sign-up-shop',
      StatusId: '1',
      UserToken: ''
    };
  }
  registerShop() { }
  toggleShowForm() {
    this.showForm = !this.showForm;
  }
  done(isDoneIntro) {
    this.showForm = isDoneIntro;
  }


}
