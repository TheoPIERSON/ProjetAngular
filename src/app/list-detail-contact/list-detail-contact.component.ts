import { Component, OnInit } from '@angular/core';
import { Model } from 'src/model/user.model';
import { ContactService } from 'src/service/contact.service';

@Component({
  selector: 'app-list-detail-contact',
  templateUrl: './list-detail-contact.component.html',
  styleUrls: ['./list-detail-contact.component.css'],
})
export class ListDetailContactComponent implements OnInit {
  contacts!: Model[];

  constructor(private contactService: ContactService) {}
  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }
}
