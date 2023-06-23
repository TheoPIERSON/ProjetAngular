import { Injectable } from '@angular/core';
import { Model } from 'src/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: Model[] = [
    {
      nom: 'bob',
      prenom: 'Billy',
      image: 'assets/images/8machine-_-GVAYgLlpeZ8-unsplash.jpg',
      job: 'provider',
    },
    {
      nom: 'JO',
      prenom: 'JO',
      image: 'assets/images/vinay-tryambake-PPL37QnXzNI-unsplash.jpg',
      job: 'provider',
    },
  ];
  getContacts(): Model[] {
    return this.contacts;
  }
}
