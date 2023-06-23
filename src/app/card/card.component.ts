import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/model/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() model!: Model;
  ngOnInit(): void {}
}
