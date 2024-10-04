import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categorias = [
    { nome: 'Esportes', icone: 'fa-solid fa-football', rota: '/esportes' },
    { nome: 'Artes Marciais', icone: 'fa-solid fa-hand-fist', rota: '/artes-marciais' },
    // Adicione mais categorias aqui
  ];

  constructor(private router: Router) { }

  irParaCategoria(rota: string) {
    this.router.navigate([rota]);
  }
}
