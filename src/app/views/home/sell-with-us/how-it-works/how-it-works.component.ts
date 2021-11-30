import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {
  @Output() doneIntro: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  done() {
    this.doneIntro.emit(true);

  }

  login() {
    this.router.navigate(['sign-in'])
  }
}
