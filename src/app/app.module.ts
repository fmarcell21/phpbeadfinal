import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddataComponent } from './adddata/adddata.component';
import { EditdataComponent } from './editdata/editdata.component';
import { ListdataComponent } from './listdata/listdata.component';
import {MyserviceService} from "./myservice.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AdddataComponent,
    EditdataComponent,
    ListdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyserviceService, ListdataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
