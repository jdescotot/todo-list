import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { DiscardedTasksComponent } from './components/discarded-tasks/discarded-tasks.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'completed', component: CompletedTasksComponent },
  { path: 'discarded', component: DiscardedTasksComponent },
  { path: '**', redirectTo: '/tasks' }
];
