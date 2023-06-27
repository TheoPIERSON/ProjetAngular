import { Injectable } from '@angular/core';
import { Model } from 'src/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: Model[] = [
    {
      id: 0,
      nom: 'Bob',
      prenom: 'Billy',
      image: 'assets/images/8machine-_-GVAYgLlpeZ8-unsplash.jpg',
      job: 'provider',
      age: 3,
      value: 'Rare',
    },
    {
      id: 1,
      nom: 'JO',
      prenom: 'JO',
      image: 'assets/images/vinay-tryambake-PPL37QnXzNI-unsplash.jpg',
      job: 'supplier',
      age: 6,
      value: 'Super Rare',
    },
  ];
  getContacts(): Model[] {
    return this.contacts;
  }
  /*getContactElem(): Model[] {
    return this.contacts.filter((x) => x.id === '1');
  }*/

  getContactById(id: number): Model {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) console.log(this.contacts[i]);
    }
    return new Model();
  }
}
