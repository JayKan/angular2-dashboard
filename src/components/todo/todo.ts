import { Component, OnInit, ViewEncapsulation } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import { TodoList } from './todo.service';

@Component({
  selector: 'todo-widget',
  template:`
  <div class="todo-container card card-danger">
    <div class="card-header">
      <div class="todo-header text-xs-center">
        <h4><i class="fa fa-tasks"></i>&nbsp;To do Tasks</h4>
      </div>
    </div>
    
    <div class="card-block" style="padding-bottom: 0;">
      <div class="todo-body">
        <div class="todo-list-wrap">
          <ul class="todo-list">
            <li *ngFor="#todo of _todoList.get()">
              <label class="checkbox1 animated bounceInDown">
                <input type="checkbox">    
                <span></span>
              </label>
              <span class="done animated bounceInRight">{{ todo }}</span>
            </li>
          </ul>
        </div>
        <form class="todo-from-bottom" (submit)="addName()">
          <div class="input-group">
            <input type="text" class="form-control" [(ngModel)]="newTodo">
            <span class="input-group-btn">
              <button type="submit" class="btn btn-danger">Add</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
  `,
  directives: [FORM_DIRECTIVES],
  providers: [TodoList],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['components/todo/todo.css']
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