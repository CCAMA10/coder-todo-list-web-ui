import { Component, Input } from '@angular/core';
import { Tarea } from '../model/Tarea';
import { EnumStatus } from '../model/EnumStatus';


@Component({
  selector: 'tarea-component',
  standalone: true,
  imports: [],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.sass'
})
export class TareaComponent {
  @Input() tarea: Tarea | undefined;
  @Input() index: number | undefined;

  enumStatus = EnumStatus;

  
  changeStatus(status: EnumStatus) {
    if (this.tarea) {
      this.tarea.status = status;
    }
  }


}
