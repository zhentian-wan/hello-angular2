import { Component, OnInit } from '@angular/core';
import {ContactDetailComponent} from "./contact-detail-component/contact-detail-component.component";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  directives: [ContactDetailComponent, ROUTER_DIRECTIVES],
  selector: 'app-contact-list-component',
  templateUrl: 'contact-list-component.component.html',
  styleUrls: ['contact-list-component.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Array<Object>;
  constructor() {
    this.contacts = [
      {
        id: 0,
        name: "Zhentian",
        position: "Lead developer"
      },
      {
        id: 1,
        name: "ABC",
        position: "Junior developer"
      },
      {
        id: 2,
        name: "Herry",
        position: "Productor Owner"
      },
      {
        id: 3,
        name: "Janne",
        position: "Master"
      },
      {
        id: 4,
        name: "Jonne",
        position: "Backend developer"
      }
    ];
  }
  ngOnInit() {
  }

}
