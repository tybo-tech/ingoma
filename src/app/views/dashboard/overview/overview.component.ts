import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  user: User;

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.accountService.currentUserValue;
    if (!this.user) {
      this.router.navigate([`dashboard`]);
    }
  }

  back() {
    this.router.navigate(['']);
  }

  goto(url) {
    this.router.navigate([`dashboard/${url}`]);
  }


}
