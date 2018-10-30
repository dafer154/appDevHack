import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {CharactersComponent} from './pages/characters/characters.component';
import { DetailCharacterComponent} from './pages/detail-character/detail-character.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AboutComponent} from './pages/about/about.component';

const app_routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'character/:id', component: DetailCharacterComponent},
    {path: 'characters', component: CharactersComponent},
    {path: 'about', component: AboutComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
