import { faker } from "@faker-js/faker";
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: parseFloat(faker.location.latitude()),
      lng: parseFloat(faker.location.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
