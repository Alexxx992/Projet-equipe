import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe2.component.html',
  styleUrls: ['./equipe2.component.scss']
})
export class EquipeComponent implements OnInit {
  @Input() equipe:any;
  title = 'Equipe component';
  constructor() { }

  ngOnInit() {
  }

}
