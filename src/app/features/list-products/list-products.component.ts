import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'] // Debe ser un arreglo
})
export class ListProductsComponent {
  listProducts: Product[] = [
    {
      id:1,
      name: 'Coca-cola',
      description: 'bebida con azucar',
      price: 15,
      stock: 100
    },
    {
      id:2,
      name: 'Pepsi',
      description: 'bebida con azucar',
      price: 25,
      stock: 100
    }
  ];
}