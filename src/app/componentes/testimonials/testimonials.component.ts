import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})

export class TestimonialsComponent {
  testimonials = [
    {
      text: 'Achei o site ACHÔ incrível! A interface é super intuitiva, e adorei o quiz que me ajudou a descobrir minha paixão por fotografia. Agora estou mergulhando nesse novo hobby e amando cada momento!',
      author: 'Gabriel Moreira',
      image: 'images/gabriel.png'
    },
    {
      text: 'Nunca pensei que fosse encontrar um site tão completo como o ACHÔ.',
      author: 'Ana',
      image: 'images/ana.png'
    },
    {
      text: 'Finalmente encontrei um hobby que se encaixa perfeitamente no meu estilo de vida. A plataforma é fácil de usar e muito informativa!"',
      author: 'Julia',
      image: 'images/julia.png'
    }
  ];

}