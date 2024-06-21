import { Component } from '@angular/core';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { Tarea } from '../model/Tarea';
import { EnumStatus } from '../model/EnumStatus';
import { JsonPipe } from '@angular/common';
import { TareaComponent } from '../tarea/tarea.component';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [TodoInputComponent, JsonPipe, TareaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.sass'
})
export class ListaTareasComponent {



  listaTareas: Tarea[] = [{
    descripcion: "Estudiar Angular",
    status: EnumStatus.Backlog
  }];

  enumStatus = EnumStatus;
  agregarTarea(tarea: string) {
    const newTask = {
      descripcion: tarea,
      status: EnumStatus.Backlog  
    }
    this.listaTareas.push(newTask);
  }

  eliminarTarea(index: number) {
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(index: number, tarea: Tarea) {
    this.listaTareas[index] = tarea;
  }


}
