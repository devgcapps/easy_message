import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = "Professores";

  public professores = [
    {id: 1,nome: "Marco", disciplina: "Matemática" },
    {id: 2,nome: "Julio", disciplina: "Física" },
    {id: 3,nome: "Felip", disciplina: "Português" },
    {id: 4,nome: "Julia", disciplina: "Inglês" },
    {id: 5,nome: "Mario", disciplina: "Programação" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
