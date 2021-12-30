import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardsInfo = [
    {
      title: "Projetos",
      value: 35,
      color: '#046313'
    },
    {
      title: "Estrelas",
      value: 480,
      color: '#044A7D'
    },
    {
      title: "Seguidores",
      value: 78,
      color: '#725200'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
