import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulo de roteamento específico para a Home
import { HomeRoutingModule } from './Home/home-routing.module';
import { HomePageComponent } from './Home/home.component';
import { PostListComponent } from '../components/PostListComponent/post-list.component';
import { SidebarComponent } from '../components/SidebarComponent/sidebar.component';
import { ControlsComponent } from '../components/ControlsComponent/controls.component';
import { PostCardComponent } from '../components/PostCardComponent/post-card.component';

// A página e todos os componentes de apresentação que ela utiliza

@NgModule({
  /**
   * DECLARATIONS:
   * Lista todos os componentes, diretivas e pipes que pertencem a este módulo.
   * Você deve declarar aqui a página principal e todos os componentes que ela usa.
   */
  declarations: [
    HomePageComponent,
    PostListComponent,
    SidebarComponent,
    ControlsComponent,
    PostCardComponent
  ],
  /**
   * IMPORTS:
   * Lista os outros módulos cujas funcionalidades são necessárias para os componentes
   * declarados neste módulo.
   */
  imports: [
    // Fornece diretivas comuns como *ngIf, *ngFor e pipes como o 'date'.
    CommonModule,

    // Conecta o HomeModule ao seu próprio sistema de rotas.
    HomeRoutingModule
  ]
})
export class HomeModule { }
