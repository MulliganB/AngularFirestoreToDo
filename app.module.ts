import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';

import { ItemService } from './services/item.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './views/main/main.component';
import { FooterComponent } from './components/footer/footer.component';


import { FormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common'; //for splitting strings
import { AddItemComponent } from './components/add-item/add-item.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'firebaseToDo'),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]

})
export class AppModule { }
