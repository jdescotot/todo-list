import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importamos CommonModule
import { FormsModule } from '@angular/forms';  // Importamos FormsModule
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TaskModalComponent } from '../task-modal/task-modal.component'; // Importamos TaskModalComponent
import { TaskItemComponent } from '../task-item/task-item.component'; // Importamos TaskItemComponent

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskModalComponent, TaskItemComponent],  // Declaramos los módulos y componentes importados
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  isModalOpen: boolean = false;
  isEditing: boolean = false;
  selectedTaskId?: number;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  openModal(task?: Task) {
    this.isModalOpen = true;
    this.isEditing = !!task;
    this.selectedTaskId = task ? task.id : undefined;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isEditing = false;
    this.selectedTaskId = undefined;
    this.tasks = this.taskService.getTasks();
  }

  completeTask(taskId: number) {
    this.taskService.completeTask(taskId);
    this.tasks = this.taskService.getTasks();
  }

  discardTask(taskId: number) {
    this.taskService.discardTask(taskId);
    this.tasks = this.taskService.getTasks();
  }

  handleTaskSubmit(taskData: { title: string; description: string }) {
    if (this.isEditing && this.selectedTaskId != null) {
      this.taskService.editTask(this.selectedTaskId, taskData.title, taskData.description);
    } else {
      this.taskService.addTask(taskData.title, taskData.description);
    }
    this.closeModal();
  }
}
