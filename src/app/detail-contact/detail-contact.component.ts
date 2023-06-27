import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/model/user.model';
import { ContactService } from 'src/service/contact.service';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css'],
})
export class DetailContactComponent implements OnInit {
  @Input() contacts!: Model;

  constructor(private contactDetails: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactDetails.getContactById(1);
  }
}
