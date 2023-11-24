import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";
import {Pet} from "./pet";
import {CatalogJson, PetJson} from "./json-structure";

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private static imageFolderUri = 'http://localhost:8080/images/pets/';
  private jsonDataUri = 'http://localhost:8080/api/pets';

  private static json2Pet(petJson: PetJson): Pet {
    const pet = new Pet();
    pet.id = petJson.id;
    pet.name = petJson.name;
    pet.petKind = petJson.petKind;
    pet.age = petJson.age;
    pet.image = PetDataService.imageFolderUri + petJson.image;

    return pet;
  }

  public getPetList(): Observable<Pet[]> {
    const pets: Pet[] = [];
    const subject: BehaviorSubject<Pet[]> = new BehaviorSubject<Pet[]>(pets);
    this.httpClient
      .get(this.jsonDataUri)
      .subscribe(
        (dataJson: any) => {
          const catalogJson: CatalogJson = dataJson._embedded;
          const items: PetJson[] = catalogJson.pets;
          console.log(items);
          items.forEach(
            (petJson: PetJson) => pets.push(PetDataService.json2Pet(petJson))
          );
          subject.next(pets);
        }
      )
    return subject;
  }

  public getPet(id: String): Observable<Pet> {
    const subject: ReplaySubject<Pet> = new ReplaySubject<Pet>();
    const url = `${this.jsonDataUri}/${id}`;

    this.httpClient
      .get(url)
      .subscribe(
        (petJson: any) => {
          console.log(petJson);
          const pet = PetDataService.json2Pet(petJson);
          subject.next(pet);
        }
      );
    return subject;
  }
}
