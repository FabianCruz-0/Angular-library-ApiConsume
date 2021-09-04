import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class dummyService {

  data = [
    {
      id: 0,
      titulo: 'GOT: Choque de reyes',
      editorial: 'De!Bolsillo',
      autor: 'George R.R. Martin'
    },
    {
      id: 1,
      titulo: 'El simbolo perido',
      editorial: 'De!Bolsillo',
      autor: 'Dan Brown'
    },
    {
      id: 2,
      titulo: 'El nombre del viento',
      editorial: 'De!Bolsillo',
      autor: 'Patrick Rothfuss'
    },
    {
      id: 3,
      titulo: 'La chica del tren',
      editorial: 'Booket',
      autor: 'Paula Hawkins'
    },
    {
      id: 4,
      titulo: 'El codigo Da Vinci',
      editorial: 'De!Bolsillo',
      autor: 'Dan Brown'
    },
    {
      id: 5,
      titulo: 'La conspiracion',
      editorial: 'De!Bolsillo',
      autor: 'Dan Brown'
    }
  ]

  constructor() { }

  get() {
    return this.data;
  }
}