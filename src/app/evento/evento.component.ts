import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evento } from '../model/Evento';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit{
  titulo : string = 'Eventos';
  listaDeEventos : Evento[] =[
    /*
    {
      idEvento: 1,
      nombreEvento: 'evento xd',
      descripcionEvento: 'dsd',
      fechaCreacion: '2023-12-19'
    },
    {
      idEvento: 2,
      nombreEvento: 'evento',
      descripcionEvento: 'dsd',
      fechaCreacion: '2023-12-19'
    },
    {
      idEvento: 3,
      nombreEvento: 'evento',
      descripcionEvento: 'dsd',
      fechaCreacion: '2023-12-19'
    }
    */
  ];
  

  constructor(){}

  
  ngOnInit(): void{
    throw new Error('Metodo no implementado.');
  }

  delete(evento : Evento): void{
    Swal.fire('pendiente');
  }
  
}

function cargarEventos() {
  throw new Error('Funcion no implementada');
}
