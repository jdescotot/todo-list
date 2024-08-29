import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {
  @Input() isEditing: boolean = false;
  @Input() taskId?: number;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<{ title: string, description: string }>();

  taskTitle: string = '';
  taskDescription: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    if (this.isEditing && this.taskId != null) {
      const task = this.taskService.getTasks().find(t => t.id === this.taskId);
      if (task) {
        this.taskTitle = task.title;
        this.taskDescription = task.description;
      }
    }
  }

  closeModal() {
    this.onClose.emit();
  }

  submitForm() {
    this.onSubmit.emit({ title: this.taskTitle, description: this.taskDescription });
    this.closeModal();
  }
}
