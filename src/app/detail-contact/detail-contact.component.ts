import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/model/user.model';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css'],
})
export class DetailContactComponent implements OnInit {
  @Input() model!: Model;
  ngOnInit(): void {}
}
