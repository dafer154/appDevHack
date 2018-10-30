import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/* File routing */
import { AppRoutingModule } from './app-routing.modules';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { DetailCharacterComponent } from './detail-character/detail-character.component';

//Services
import { CharacterService } from './services/character.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './shared/header/header.component';

//Pagination

import {NgxPaginationModule} from 'ngx-pagination';

//Animations

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    DetailCharacterComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
