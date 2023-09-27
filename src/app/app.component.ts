import { Component } from '@angular/core';

function newItem(name: string) {
	return {activity: name, checked: false};
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoItem = [
	newItem("swimming"),
	newItem("running"),
	newItem("studying"),
  ]

  inputvalue = "";
  
  AddItem() {
	this.todoItem.push( newItem(this.inputvalue) );
	this.inputvalue = "";
  }
}
