import { Injectable } from '@angular/core';

@Injectable()
export class TodoList {
  names: Array<string> = [
    'Buy a milk',
    'Go to shop and find some products',
    'Send documents to Mke',
    'Sprint plannings and prioritization'
  ];
  
  get(): string[] {
    return this.names;
  }
  
  add(value: string): void {
    this.names.push(value);
  }
}