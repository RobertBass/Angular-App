import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from "../../models/task.model"

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
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

  newTaskCtr = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  });

  addTask(title: string){
    const newtask = {
      id: Date.now(),
      title: title,
      completed: false
    }
    this.tasks.update((tasks) => [...tasks, newtask]);
  }

  changeHandler(){
    if (this.newTaskCtr.valid){
      const value = this.newTaskCtr.value.trim();
      if (value !== ''){
        this.addTask(value);
        this.newTaskCtr.setValue('');
      }
      else {
        this.newTaskCtr.setValue('');
      }
    }
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

  updateTaskTitle(index: number, event: Event){
    const info = event.target as HTMLInputElement;
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index){
          return {
            ...task,
            title: info.value,
            editing: false
          }
        }
        return task;
      })
    })
  }

  editingMode(index: number){
    if (this.tasks()[index].completed) return;
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index){
          return {
            ...task,
            editing: true
          }
        }
        return {
          ...task,
          editing: false
        };
      })
    })
  }
}
