import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Ejercicio 09 - Interpolación';
  nombre = "Ana Paola Rebolloso Saucedo";
  edad = 25;
  semestre = "5to semestre";
  calificaciones = [8,9,10,8,9,9,9,10,9];

  calcularPromedios(){
    let suma = 0;
    let longitudArreglo = this.calificaciones.length;
    for(let i=0; i<longitudArreglo; i++)
      suma+=this.calificaciones[i];
    return suma/longitudArreglo;
  }

  estadoAlumno(){
    if(this.calcularPromedios()>=6)
      return "APROBADO";
    else
      return "REPROBADO";
  }
}
