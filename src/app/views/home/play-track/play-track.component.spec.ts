/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlayTrackComponent } from './play-track.component';

describe('PlayTrackComponent', () => {
  let component: PlayTrackComponent;
  let fixture: ComponentFixture<PlayTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
