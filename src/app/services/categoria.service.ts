import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/Categoria';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class CategoriaService{
    private apiUrl = 'http://localhost:3000/categorias'; //URL da API

    //Criar uma lista fake
    categorias: Categoria[] = []

    //Injeção de dependência do http
    constructor(private http:HttpClient) { 

    }

    list() : Observable<Categoria[]>{
        return this.http.get<Categoria[]>(this.apiUrl) as Observable<Categoria[]>
      }


  }

