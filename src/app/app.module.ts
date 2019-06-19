import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { FooterComponent } from '../components/footer/footer.component';
import { TodoComponent } from '../components/todo/todo.component';
import { TodosAddComponent } from '../components/todo/todos-add/todos-add.component';
import { TodosFooterComponent } from '../components/todo/todos-footer/todos-footer.component';
import { TodosItemComponent } from '../components/todo/todos-item/todos-item.component';
import { TodosListComponent } from '../components/todo/todos-list/todos-list.component';
import { appReducers } from '../interfaces/app.reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodosAddComponent,
    TodosFooterComponent,
    TodosItemComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
