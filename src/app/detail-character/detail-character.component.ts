import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css']
})
export class DetailCharacterComponent implements OnInit {

  character = {};

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe((param: any ) => {
      const id = param['id'];
      console.log(id);
      this.characterService.detailCharacter(id).subscribe(
        response => {
          this.character = response;
          console.log(this.character);
        }
      );
    });
  }



}
