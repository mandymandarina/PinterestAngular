import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuUpComponent } from './menu-up/menu-up.component';
import { MenuTagsComponent } from './menu-tags/menu-tags.component';
import { WallComponent } from './wall/wall.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { Routes, RouterModule } from "@angular/router";
import { ImagesComponent } from './images/images.component';
import { HttpModule } from '@angular/http';
import { ImageService } from './shared/image.service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path:'',
    component: WallComponent 
   },   
]
@NgModule({
  declarations: [
    AppComponent,
    MenuUpComponent,    
    MenuTagsComponent,
    WallComponent,
    SubMenuComponent,
    ImagesComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
