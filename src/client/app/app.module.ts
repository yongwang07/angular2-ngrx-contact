import { NgModule, } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import {contactReducer} from './reducers/ContactReducer';
import {ContactComponent} from './components/Contact';
import {ContactList} from './components/ContactList';
import {StoreModule} from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule,    
  StoreModule.provideStore({contactReducer}),
  StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
  })],
  declarations: [ContactComponent,ContactList],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [ContactList]
})
export class AppModule { }