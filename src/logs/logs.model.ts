export class LogModel {
    id: number;
    location: string;
    distance: number;
    constructor(id: number, location: string, distance: number) {
      this.id = id;
      this.location = location;
      this.distance = distance;
    }
}