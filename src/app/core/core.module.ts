import { CommonModule } from '@angular/common';
import { DbProvider } from './db.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [DbProvider]
})
export class CoreModule { }
