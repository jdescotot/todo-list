import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskModalComponent } from './components/task-modal/task-modal.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AppRoutingModule } from './app-routing.module';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { DiscardedTasksComponent } from './components/discarded-tasks/discarded-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskModalComponent,
    TaskItemComponent,
    CompletedTasksComponent,
    DiscardedTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
