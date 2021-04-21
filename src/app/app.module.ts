import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {almacenarReducer} from './reducers/image.reducers';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import {HttpClientModule} from '@angular/common/http';

//se agregó en imports:
//FormsModule 
//HttpClienteModule
//storeModule 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ almacenar:almacenarReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
