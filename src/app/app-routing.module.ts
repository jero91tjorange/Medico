import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/appcomponent/app.component';
import { Erro404Component } from './components/erro404/erro404.component';

const routes: Routes = [
  {path: 'medico', loadChildren: () => import('./components/medico/medico.module').then(m => m.MedicoModule)},
  {path: '**', component: Erro404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
