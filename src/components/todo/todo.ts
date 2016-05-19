import { Component, OnInit, ViewEncapsulation } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import { TodoList } from './todo.service';

@Component({
  selector: 'todo-widget',
  directives: [FORM_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'components/todo/todo.template.html',
  styleUrls: ['components/todo/todo.css'],
  providers: [TodoList]
})
export class TodoWidget implements OnInit {
  newTodo: string;
  data: Array<string>;
  
  constructor(private _todoList: TodoList) {}
  
  ngOnInit(): void {
    let todoList: any = $('.todo-list-wrap');
    todoList.perfectScrollbar();
  }
  
  addName(): void {
    this._todoList.add(this.newTodo);
    this.newTodo = '';
  }
}