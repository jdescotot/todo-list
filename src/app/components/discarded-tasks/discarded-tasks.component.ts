import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-discarded-tasks',
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
