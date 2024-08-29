import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-discarded-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './discarded-tasks.component.html',
  styleUrls: ['./discarded-tasks.component.scss']
})
export class DiscardedTasksComponent implements OnInit {
  discardedTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.discardedTasks = this.taskService.getDiscardedTasks();
  }
}
