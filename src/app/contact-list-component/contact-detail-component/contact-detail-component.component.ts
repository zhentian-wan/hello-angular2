import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-contact-detail-component',
  templateUrl: 'contact-detail-component.component.html',
  styleUrls: ['contact-detail-component.component.css']
})
export class ContactDetailComponent implements OnInit {

  message: string;
  constructor(private route: ActivatedRoute) {
    this.message = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
