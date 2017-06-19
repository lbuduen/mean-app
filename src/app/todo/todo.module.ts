import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoService } from '../todo.service';

import { TodoComponent } from './todo.component';

const todoRoutes:Routes = [
    { path: 'todo', component: TodoComponent}
];

@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        RouterModule.forChild(todoRoutes)
    ],
    declarations: [TodoComponent],
    exports: [],
    providers: [TodoService]
})
export class TodoModule { }