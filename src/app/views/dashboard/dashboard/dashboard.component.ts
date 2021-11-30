import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedIndex = 3;
  user: User;
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.user = this.accountService.currentUserValue;
  }

  onTabChanged(event: MatTabChangeEvent) {
    console.log(event.index);
    this.selectedIndex = event.index;
  }

}
