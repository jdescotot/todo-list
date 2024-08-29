import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importamos CommonModule
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],  // Declaramos CommonModule
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onEdit = new EventEmitter<Task>();
  @Output() onComplete = new EventEmitter<number>();
  @Output() onDiscard = new EventEmitter<number>();

  editTask() {
    this.onEdit.emit(this.task);
  }

  completeTask() {
    this.onComplete.emit(this.task.id);
  }

  discardTask() {
    this.onDiscard.emit(this.task.id);
  }
}
