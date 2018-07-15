import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal/list/list.component';
import { AnimalDetailComponent } from './animal/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
