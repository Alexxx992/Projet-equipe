import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nomEquipe:string;
  //team1:any = { nom:'Team Z'};


  tabEquipe:any[] = [  {nom:'team A',

    tabPersonne :[ {nom:'DOE',prenom:'John'}, {nom:'CRUISE',prenom :'Tom'} ,{nom:'GEEK',prenom :'Tom'} ] },

    {nom:'team B', tabPersonne :[
        {nom:'Cage',prenom:'Nicolas'},

      ] }

  ];

  onAjouterEquipe(){
    console.log(this.nomEquipe);
    // je créér un objet equipe
    let e:any ={};

    e.nom = this.nomEquipe;
    e.tabPersonne = [];
    this.nomEquipe = ''; // je vide le champ inpuit
    this.tabEquipe.push(e);

  }
}
