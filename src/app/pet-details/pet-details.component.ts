import {Component, OnInit} from '@angular/core';
import {Pet} from "../pet";
import {PetDataService} from "../pet-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent implements OnInit {

  pet?: Pet;

  constructor(private petDataService: PetDataService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id != null){
        this.petDataService.getPet(id).subscribe(pet => {
          this.pet = pet;
        });
      }
    });
  }
}
