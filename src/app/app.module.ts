import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServService } from './serv.Service';          //importer le service SRV

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
