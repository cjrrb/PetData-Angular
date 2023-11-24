export interface PictureJson {
  image: string;
}

export interface PetJson {
  id: string;
  name: string;
  petKind: string;
  age: number;
  image: PictureJson;
}

export interface CatalogJson {
  pets: PetJson[];
}
