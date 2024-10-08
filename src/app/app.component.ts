import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { GalleryComponent } from './componentes/gallery/gallery.component';
import { CategoryComponent } from './componentes/category/category.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TestimonialsComponent } from './componentes/testimonials/testimonials.component';
import { ExploreComponent } from './componentes/explore/explore.component';
import { HobbyComponent } from './componentes/hobby/hobby.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, GalleryComponent, CategoryComponent, ExploreComponent, HobbyComponent, TestimonialsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ACHO';
}
