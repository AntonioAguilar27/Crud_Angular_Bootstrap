import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet, ReactiveFormsModule],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent {
  form : FormGroup;

   constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required]
    })
   }
}
