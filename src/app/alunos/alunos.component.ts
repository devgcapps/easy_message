import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = "Alunos";

  public alunos = [
    { id: 1, nome: 'Feliphe', sobreNome: 'Graça', telefone: 16991204444 },
    { id: 2, nome: 'Marscos', sobreNome: 'Gomes', telefone: 16988404531 },
    { id: 3, nome: 'Juniior', sobreNome: 'Bispo', telefone: 16991730226 },
    { id: 4, nome: 'Mirella', sobreNome: 'Alcantra', telefone: 16991595874 },
    { id: 5, nome: 'Millena', sobreNome: 'Alvares', telefone: 16991702526 },
    { id: 6, nome: 'Elizabe', sobreNome: 'Andrade', telefone: 16991702874 },
    { id: 7, nome: 'Marcusi', sobreNome: 'Vianna', telefone: 16991704785 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
