import { InterpolacaoComponent } from './components/interpolacao/interpolacao.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { PropertieBindingComponent } from "./components/propertie-binding/propertie-binding.component";
import { DiretivaComponent } from './components/diretiva/diretiva.component';
import { Carros } from './interfaces/Carros';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolacaoComponent, ControlFlowComponent, 
    PropertieBindingComponent,DiretivaComponent,ClienteComponent,HomeComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-control-flow';

  carros: Carros[] = [
    {id:1, nome:"Corsa", marca:"GM", ano: 1996},
    {id:2, nome:"Mustang", marca:"Ford", ano: 2018},
    {id:3, nome:"Polo", marca:"Volkswagen", ano: 2022},
  ]
}
