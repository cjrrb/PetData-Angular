import {Component, OnInit} from '@angular/core';
import {Pet} from "../pet";
import {PetDataService} from "../pet-data.service";

@Component({
  selector: 'app-pet-index',
  templateUrl: './pet-index.component.html',
  styleUrl: './pet-index.component.css'
})
export class PetIndexComponent implements OnInit {
  public pets: Pet[];

  constructor(private petDataService: PetDataService) {
    this.pets = [];
  }

  ngOnInit() {
    this.petDataService.getPetList().subscribe(
      pets => {
        console.log(pets);
        this.pets = pets;
      }
    )
  }
}
