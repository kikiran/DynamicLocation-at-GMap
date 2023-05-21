import { faker } from "@faker-js/faker";
export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhraseNoun();
    this.location = {
      lat: parseFloat(faker.location.latitude()),
      lng: parseFloat(faker.location.longitude()),
    };
  }

  markerContent(): string {
    return `Comapny Name: ${this.name}`;
  }
}
