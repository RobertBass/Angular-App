import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = [
    'Instalar Angular',
    'Crear Proyecto',
    'Crear Componentes',
    'Crear Servicio'
  ];
  name = 'Roberto';
  age = 38;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name : 'Roberto',
    age : 38,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler(){
    alert('Hola');
  }

  changeHandler(event: Event){
    console.log(event);
    console.log(event.target)
  }

  kdownHandler(event: KeyboardEvent){
    const inp = event.target as HTMLInputElement;
    console.log(inp.value)
  }
}
