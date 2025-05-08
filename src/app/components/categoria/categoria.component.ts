import { Component } from '@angular/core';
import { Categoria } from '../../interfaces/Categoria';
import { CategoriaService } from '../../services/categoria.service';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  categorias: Categoria[] = []


  constructor(
    private categoriaService: CategoriaService,
    ) {

    }

  list(): void {

    this.categoriaService.list().subscribe((resposta) => (this.categorias = resposta))
  }

  ngOnInit(): void {
    this.list()
  }
}
