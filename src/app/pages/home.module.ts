import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulo de roteamento específico para a Home
import { HomeRoutingModule } from './Home/home-routing.module';
import { HomePageComponent } from './Home/home.component';
import { PostListComponent } from '../components/PostListComponent/post-list.component';
import { SidebarComponent } from '../components/SidebarComponent/sidebar.component';
import { ControlsComponent } from '../components/ControlsComponent/controls.component';
import { PostCardComponent } from '../components/PostCardComponent/post-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    PostListComponent,
    SidebarComponent,
    ControlsComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
