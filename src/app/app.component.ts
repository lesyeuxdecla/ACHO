import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { GalleryComponent } from './componentes/gallery/gallery.component';
import { CategoryComponent } from './componentes/category/category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, GalleryComponent, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ACHO';
}
