import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CharactersComponent} from './characters/characters.component';
import { DetailCharacterComponent} from './detail-character/detail-character.component';
import {NotFoundComponent} from './not-found/not-found.component';

const app_routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'character/:id', component: DetailCharacterComponent},
    {path: 'characters', component: CharactersComponent},
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
