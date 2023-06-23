import { Component, OnInit } from '@angular/core';
import { Model } from 'src/model/user.model';
import { ContactService } from 'src/service/contact.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css'],
})
export class ArrayComponent implements OnInit {
  contacts!: Model[];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }
}
