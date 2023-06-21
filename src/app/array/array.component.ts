import { Component, OnInit, Input } from '@angular/core';
import { Model } from 'src/model/userModel';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css'],
})
export class ArrayComponent implements OnInit {
  @Input() tab!: Model[];
  ngOnInit(): void {
    this.tab = [
      { nom: 'Bob', prenom: 'Billy', image: '', job: '' },
      { nom: 'JO', prenom: 'JO', image: '', job: '' },
    ];
  }
}
