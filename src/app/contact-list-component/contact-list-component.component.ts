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

  constructor() {}
  ngOnInit() {
  }

}
