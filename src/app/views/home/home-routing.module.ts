import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from 'src/app/account/contact/contact.component';
import { ForgotPasswordComponent, ResetPasswordComponent } from 'src/app/account/forgot-password';
import { LoginModalComponent } from 'src/app/account/login-modal/login-modal.component';
import { SignInComponent } from 'src/app/account/sign-in';
import { SignUpComponent } from 'src/app/account/sign-up';
import { SignUpModalComponent } from 'src/app/account/sign-up-modal/sign-up-modal.component';
import { BookingComponent } from './booking/booking.component';
import { MyBookingsComponent } from './booking/my-bookings/my-bookings.component';
import { MyProfileComponent } from './booking/my-profile/my-profile.component';
import { CartComponent, CheckoutComponent } from './cart';
import { PaymentCancelledComponent } from './cart/checkout/payment-cancelled/payment-cancelled.component';
import { ShopingSuccesfulComponent } from './cart/checkout/shoping-succesful/shoping-succesful.component';
import { FiitingRoomComponent } from './fiiting-room/fiiting-room.component';
import { HomeLandingComponent } from './home-landing';
import { HomeNavComponent } from './home-nav';
import { HomeToolbarNavigationComponent } from './home-toolbar-navigation/home-toolbar-navigation.component';
import { HomeComponent } from './home.component';
import { PlayTrackComponent } from './play-track/play-track.component';
import { ProductSectionCardComponent, ProductSectionComponent, ProductSectionDetailComponent } from './product-section';
import { HowItWorksComponent } from './sell-with-us/how-it-works/how-it-works.component';
import { SellWithUsComponent } from './sell-with-us/sell-with-us.component';
import { ShopComponent } from './shop';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeLandingComponent },
      // { path: '', component: FiitingRoomComponent },
      // { path: '', component: SellWithUsComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'my-home', component: MyProfileComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'fitting-room', component: FiitingRoomComponent },
      { path: 'product-details/:id', component: ProductSectionDetailComponent },
      { path: 'book/:id', component: BookingComponent },
      { path: 'shoping-succesful/:id', component: ShopingSuccesfulComponent },
      { path: 'payment-cancelled/:id', component: PaymentCancelledComponent },
      { path: 'my-bookings', component: MyBookingsComponent },
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'contact', component: ContactComponent },

    ]

  }
];

export const declarations = [
  SignInComponent,
  SignUpComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  HomeComponent,
  HomeLandingComponent,
  HomeNavComponent,
  ShopComponent,
  ProductSectionComponent,
  ProductSectionDetailComponent,
  FiitingRoomComponent,
  ProductSectionCardComponent,
  HomeToolbarNavigationComponent,
  CartComponent,
  CheckoutComponent,
  WelcomeComponent,
  BookingComponent,
  MyBookingsComponent,
  MyProfileComponent,
  PaymentCancelledComponent,
  ShopingSuccesfulComponent,
  ContactComponent,
  LoginModalComponent,
  SellWithUsComponent,
  HowItWorksComponent,
  SignUpModalComponent,
  PlayTrackComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
