import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private allTasks: Task[] = [];
  private completedTasks: Task[] = [];
  private discardedTasks: Task[] = [];
  private currentId = 1;
  private tasksSubject = new Subject<any>();

   constructor() {}

  getTasks(): Task[] {
    return this.allTasks;
  }

  getCompletedTasks(): Task[] {
    return this.completedTasks;
  }

  getDiscardedTasks(): Task[] {
    return this.discardedTasks;
  }

  addTask(title: string, description: string): void {
    const newTask: Task = {
      id: this.currentId++,
      title: `${title} - ${new Date().toLocaleString()}`,
      description,
      completed: false,
      discarded: false,
      createdAt: new Date(),
    };
    this.allTasks.push(newTask);
    console.log('All Tasks:', this.allTasks);
  }

  editTask(id: number, title: string, description: string): void {
    const task = this.allTasks.find((t) => t.id === id);
    if (task) {
      task.title = title;
      task.description = description;
      task.updatedAt = new Date();
      console.log('All Tasks:', this.allTasks);
    }
  }

  completeTask(id: number): void {
    const taskIndex = this.allTasks.findIndex((t) => t.id === id);
    if (taskIndex > -1) {
      const [task] = this.allTasks.splice(taskIndex, 1);
      task.completed = true;
      task.completedAt = new Date();
      this.completedTasks.push(task);
      console.log('Completed Tasks:', this.completedTasks);
    }
  }

  discardTask(id: number): void {
    const taskIndex = this.allTasks.findIndex((t) => t.id === id);
    if (taskIndex > -1) {
      const [task] = this.allTasks.splice(taskIndex, 1);
      task.discarded = true;
      task.discardedAt = new Date();
      this.discardedTasks.push(task);
      console.log('Discarded Tasks:', this.discardedTasks);
    }
  }
}
