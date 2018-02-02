import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './list/item/item.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';

import { DataListService } from './shared/data-list.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [DataListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
