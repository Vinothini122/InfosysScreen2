import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './productService';
import { TableModule } from 'primeng/table'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[ProductService]
})
export class AppComponent {
  title = 'infosysScreen2';
  products!: Product[];

  selectedProducts!: Product;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}
export interface Product {
  type?: string;
  language?: string;
  domain?: string;
  intents?: number;
  entities?: number;
  documents?: number;
  assigned?: number;
  tagged?: number;
  trained?: number;
  status?: string;
}