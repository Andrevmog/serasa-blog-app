import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Define as rotas da aplicação
const routes: Routes = [
  {
    // Quando o usuário navegar para o caminho /home...
    path: 'home',
    // Carregue o HomeModule sob demanda (lazy loading).
    loadChildren: () => import('./pages/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
