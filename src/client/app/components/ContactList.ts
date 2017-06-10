import { Component, Inject } from '@angular/core';
import {Contact, AppState} from '../contact-store';
import { AddContactAction } from '../actions/ContactActions';
import {Store} from "@ngrx/store";
import {List} from 'immutable';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'chat-app',
  template: `
  <div id="container">
	<header>
		<div class="user">
			<img src="https://avatars2.githubusercontent.com/u/12476932?v=3&amp;s=460">
		</div>
		<div class="heading-user">
			<strong>Houssein Djirdeh</strong>
			<br/>
			<small>@hdjirdeh</small>
		</div>
	</header>
	<input #newContact class="add-contact" placeholder="Add Contact"
	      (keyup.enter)="addContact(newContact.value); newContact.value='' ">
	<ul class="contact-list">
	  <li *ngFor="let contact of contacts | async">
	  	<contact [contact]="contact"></contact>
	  </li>
	</ul>
</div>
  `,
  styles: [`
header {
  background-color: #3F51B5;
  color: #fff;
  padding: 20px;
  box-shadow: 0 2px 2px -2px #444;
}

#container {
  width: 420px;
  display: block;
  position: relative;
  margin: 200px auto;
  background: #fff;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 10px;
}

.user {
  display: inline-block;
  float: left;
  margin-right: 15px;
  width: 10%;
}

.user img {
  width: 40px;
  border-radius: 50%;
  border: #fff 2px solid;
}

.add-contact {
  border: 1px solid #f1f1f1;
  height: 55px;
  padding: 5px;
  padding-left: 25px;
  display: block;
  width: 100%;
  font-size: 1em;
  color: #444;
}

.add-contact:focus {
  outline: none;
}

.contact-list {
  margin: 0;
  padding: 0;
}

.contact-list li {
  display: block;
}  
  `],
})

export class ContactList {
	contactID: number;
  contacts: Observable<List<Contact>>;
	constructor(private store: Store<AppState>) {
		this.contactID = 0;
    this.contacts = store.select('contactReducer');
	}
  addContact(name: string) {
        this.store.dispatch(new AddContactAction(this.contactID++, name));
    }
}