import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'todo', pathMatch: 'full' },
    /*{ path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }