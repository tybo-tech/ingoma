import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule, declarations } from './home-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { MaterialModule } from 'src/app/material';
// import { PrimeNgModule } from 'src/app/primeng';
// import { QuillModule } from 'ngx-quill';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule,
    NgxAudioPlayerModule

    // QuillModule.forRoot()

  ],
  declarations: [...declarations]
})
export class HomeModule { }
