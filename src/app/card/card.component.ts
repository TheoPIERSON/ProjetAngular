import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/model/userModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() tab!: Model[];

  model!: Model;
  ngOnInit(): void {
    this.model = new Model();
    this.model.nom = ' Bob';
    this.model.prenom = 'Billy';
    this.model.image = 'assets/images/vinay-tryambake-PPL37QnXzNI-unsplash.jpg';
    this.model.job = 'provider';
  }
}
