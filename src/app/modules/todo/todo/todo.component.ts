import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todo!:string;
  todoList: any =[]
color :string ="";
  addTask(){
    console.log(this.todo)
    this.todoList.push(this.todo)
    console.log(this.todoList)
  }
}
