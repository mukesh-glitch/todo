import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { HighlighterDirective } from 'src/app/directive/highlighter.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoComponent,
    HighlighterDirective
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ]
})
export class TodoModule { }
