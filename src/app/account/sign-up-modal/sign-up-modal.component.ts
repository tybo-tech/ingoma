import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Email } from 'src/models/email.model';
import { User, UserModel } from 'src/models/user.model';
import { UploadService, UserService } from 'src/services';
import { AccountService } from 'src/services/account.service';
import { EmailService } from 'src/services/communication';
import { ADMIN, CUSTOMER, SYSTEM } from 'src/shared/constants';
import { IS_DELETED_FALSE, AWAITING_ACTIVATION } from 'src/shared/status.const';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss']
})
export class SignUpModalComponent implements OnInit {
  @Input() user: User;
  // <app-sign-up-modal [user]="user">
  isShopDetails = true;
  showLoader;
  constructor(
    private uploadService: UploadService,
    private userService: UserService,
    private emailService: EmailService,
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public uploadFile = (files: FileList) => {
    if (files.length === 0) {
      return;
    }

    Array.from(files).forEach(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', `tybo.${file.name.split('.')[file.name.split('.').length - 1]}`); // file extention
      this.uploadService.uploadFile(formData).subscribe(url => {
        this.user.Dp = `${environment.API_URL}/api/upload/${url}`;
      });

    });
  }

  save() {
    this.userService.addUserCompany(this.user).subscribe(data => {
      if (data && data.UserId) {
        console.log(data);
        alert('Account created');
        this.accountService.updateUserState(data);
        this.router.navigate([`/dashboard`]);
      }

    });
  }
  back() {
    this.router.navigate([`/dashboard/customers`]);

  }



  sendEmail(data: UserModel) {
    const emailToSend: Email = {
      Email: data.Email,
      Subject: 'Zoweh: Welcome & Activation',
      Message: '',
      Link: this.accountService.generateAccountActivationReturnLink(data.UserToken)
    };
    this.showLoader = true;
    this.emailService.sendAccountActivationEmail(emailToSend)
      .subscribe(response => {
        if (response > 0) {

        }
      });
  }



}
