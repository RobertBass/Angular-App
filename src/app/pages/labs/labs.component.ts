import {signal, Component, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  imports: [CommonModule, ReactiveFormsModule],
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
  name = signal('Roberto');
  age = 38;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name : 'Roberto',
    age : 38,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  newTasks = signal([
    'Instalar Angular',
    'Crear Proyecto',
    'Crear Componentes',
    'Crear Servicio'
  ]);

  colorCtr = new FormControl();

  clickHandler(){
    alert('Hola');
  }

  changeHandler(event: Event){
    const inp = event.target as HTMLInputElement;
    const newValue = inp.value;
    this.name.set(newValue)
    this.person.name = newValue;
  }

  kdownHandler(event: KeyboardEvent){
    const inp = event.target as HTMLInputElement;
    console.log(inp.value)
  }
}
