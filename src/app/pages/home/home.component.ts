import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from "../../models/task.model"

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: "Instalar Angular",
      completed: false
    },
    {
      id: Date.now(),
      title: "Crear Proyecto",
      completed: false
    },
    {
      id: Date.now(),
      title: "Crear Componentes",
      completed: false
    },
    {
      id: Date.now(),
      title: "Crear Servicios",
      completed: false
    },
  ]);

  addTask(title: string){
    const newtask = {
      id: Date.now(),
      title: title,
      completed: false
    }
    this.tasks.update((tasks) => [...tasks, newtask]);
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
  }


  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }

  updateTask(index: number){
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }
}
