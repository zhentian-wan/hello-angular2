import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-contact-detail-component',
  templateUrl: 'contact-detail-component.component.html',
  styleUrls: ['contact-detail-component.component.css']
})
export class ContactDetailComponent implements OnInit {

  id: number;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.id = id;
      });
  }

}
