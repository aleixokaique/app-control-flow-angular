import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interpolacao.component.html',
  styleUrl: './interpolacao.component.css'
})
export class InterpolacaoComponent {
  name: string = 'Kaique';
  age: number = 20;
  job = 'Developer';
  hobbies = ['Music', 'Sports', 'Movies'];
  car = {make: 'Ford', model: 'Mustang'};
  imageUrl = '../../../assets/mustang.jpg';
}
