import { Injectable } from '@angular/core';
import { Persona } from "../../personas";
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DatosService implements InMemoryDbService {

  createDb() {
    const personas = [
      { nombre: "Joel", apellido: "Tapia", edad: 20, genero: "M" },
      { nombre: "Andy", apellido: "Valladares", edad: 22, genero: "M" },
      { nombre: "José", apellido: "Perez", edad: 19, genero: "M" },
      { nombre: "Raul", apellido: "Vallegos", edad: 26, genero: "M" },
      { nombre: "Xavier", apellido: "Medina", edad: 18, genero: "M" },
      { nombre: "Andrea", apellido: "Santillan", edad: 25, genero: "F" },
      { nombre: "Stefy", apellido: "Fierro", edad: 19, genero: "F" }
    ];
    return { personas };
  }

/*   genId(personas: Persona[]): number {
    return personas.length > 0 ? Math.max(...personas.map(persona => persona.id)) + 1 : 11;
  } */

  constructor() { }
}
