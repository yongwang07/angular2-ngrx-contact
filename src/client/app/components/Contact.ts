import { Component, Input, Inject } from '@angular/core';
import {Contact, AppState} from '../contact-store';
import { RemoveContactAction, StarContactAction } from '../actions/ContactActions';
import {Store} from "@ngrx/store";

@Component({
  selector: 'contact',
  template: `
  <div class="contact-container">
	<i class="fa fa-user fa-2x contact-icon"></i>
	<div class="contact-info">
		<h3 class="heading--name">{{ contact.name }}</h3>
		<div class="contact-item"><i class="fa fa-phone"></i> 647-XXX-XXXX</div>
	</div>
	<button class="contact-action" (click)="starContact(contact)">
		<i class="fa fa-2x" [class.fa-star]="contact.star" [class.fa-star-o]="!contact.star"></i>
	</button>
	<button class="contact-action" (click)="removeContact(contact)">
		<i class="fa fa-trash fa-2x"></i>
	</button>
</div>
  `,
  styles: [`
.contact-action {
  color: #3F51B5;
  margin-right: 6px;
  background-color: #fff;
  border-radius: 5px;
  font-size: 0.8em;
}

.contact-action:hover {
  cursor: pointer;
  margin-top: 2px;
}

.contact-action:focus {
  outline: none;
}

.contact-list {
  margin: 0;
  padding: 0;
}

.contact-list li {
  display: flex;
  align-items: center;
  color: #919191;
  padding: 10px;
  min-height: 60px;
}

.contact-icon {
  border-radius: 50%;
  float: left;
  margin-left: 10px;
  width: 10%;
  margin-right: 10px;
}

.heading--name {
  color: #444;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.contact-info {
  width: 80%;
}

.contact-item {
  display: inline-block;
  font-size: 0.7em;
  padding-top: 5px;
}

.contact-item .fa {
  font-size: 1.3em;
  margin-right: 2px;
  margin-left: 2px;
}

.contact-container {
  display: flex;
  align-items: center;
  color: #919191;
  padding: 10px;
  min-height: 60px;
}  
  `]
})

export class ContactComponent {
  @Input() contact: Contact;

  constructor(private store: Store<AppState>) {}

  removeContact(contact: Contact) {
    this.store.dispatch(new RemoveContactAction(contact.id));
  }

  starContact(contact: Contact) {
    this.store.dispatch(new StarContactAction(contact.id));
  }
}