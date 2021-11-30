import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User, Product } from 'src/models';
import { ProductService, AccountService } from 'src/services';
import { BookingService } from 'src/services/booking.service';
import * as moment from 'moment';

@Component({
  selector: 'app-play-track',
  templateUrl: './play-track.component.html',
  styleUrls: ['./play-track.component.scss']
})
export class PlayTrackComponent implements OnInit {
  user: User;
  products: Product[];
  audioObj = new Audio();
  currentTime = '00:00:00';
  duration = '00:00:00'
  seek =0;
  audoEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart',
  ];

  constructor(
    private productService: ProductService,
    private accountService: AccountService,
    private bookingService: BookingService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.accountService.currentUserValue;
    this.productService.productListObservable.subscribe(data => {
      if (data && data.length) {
        this.products = data
      }

    });
    this.productService.getProducts('all');
  }
  view(item: Product) {
    if (item) {
      this.streamObserver(item.Code).subscribe(data => {

      });
      // console.log(item);

      // this.audioObj.src = item.Code;
      // this.audioObj.load();
      // this.audioObj.play();
    }
  }
  play() {
    this.audioObj.play();
  }
  pause() {
    this.audioObj.pause();
  }
  stop() {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
  }

  setVolume(event) {
    const v = event.target.value;
    this.audioObj.volume = v;
    console.log(v);

  }
  streamObserver(url) {
    return new Observable(observer => {
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();


      const handler = (event: Event) => {
        // console.log(event);
        this.currentTime = this.timeForamat(this.audioObj.currentTime);
        this.duration = this.timeForamat(this.audioObj.duration);
        this.seek = this.audioObj.currentTime;


      }

      this.addEvent(this.audioObj, this.audoEvents, handler);
      return () => {
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
      }

    });
  }
  a
  addEvent(obj, events: any[], handler) {
    events.forEach(e => {
      obj.addEventListener(e, handler)
    })
  }
  removeEvent(obj, events, handler) {

  }
  forwad(event) {
    const v = event.target.value;
    this.audioObj.currentTime = v;
  }

  timeForamat(time, format = "HH:mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
}
