import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationModel, User } from 'src/models';
import { AccountService, NavigationService } from 'src/services';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit {
  navItems: NavigationModel[];
  toolbarItems: NavigationModel[];
  @Input() showNav: boolean;
  @Output() navAction: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectedItem: EventEmitter<string> = new EventEmitter<string>();
  Nature: string;
  Hiphop = 'Hip hop';
  Luxury :string;
  Sites: string;
  showMenu: boolean;
  user: User;
  constructor(
    private navigationService: NavigationService,
    private accountService: AccountService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.user = this.accountService.currentUserValue;
    this.navigationService.getHomeNavigation().subscribe(data => {
      if (data.length > 0) {
        this.navItems = data;
        this.navItems[0].Class = 'active';
      }
    });

    this.navigationService.getToolbarNavigation().subscribe(data => {
      if (data.length > 0) {
        this.toolbarItems = data;
      }
    });

  }

  actionClick() {
    // this.navAction.emit(true);
  }

  navItemClicked(name) {
    this.selectedItem.emit(name);
    this.navItems.forEach(item => {
      if (item.Label === name) {
        item.Class = 'active';
      } else {
        item.Class = '';
      }
    });
  }
  login() {
    this.router.navigate(['sign-in']);
  }
  register() {
    this.router.navigate(['sign-up']);
  }
  contact() {
    this.router.navigate(['contact']);
  }
  tab(tab: string) {
    if (tab === 'Nature') {
      this.Nature = 'Nature';
      this.Hiphop = '';
      this.Sites = '';
      this.Luxury = '';
    }
    if (tab === 'Hip hop') {
      this.Nature = '';
      this.Hiphop = 'Hip hop';
      this.Sites = '';
      this.Luxury = '';
    }
    if (tab === 'Sites') {
      this.Nature = '';
      this.Hiphop = '';
      this.Luxury = '';
      this.Sites = 'Sites';
    }
    if (tab === 'Luxury') {
      this.Nature = '';
      this.Hiphop = '';
      this.Sites = '';
      this.Luxury = 'Luxury';
    }
    this.navAction.emit(tab);
  }

  toggle() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    this.user = null;
    this.accountService.updateUserState(null);
  }
}
