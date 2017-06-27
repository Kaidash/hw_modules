/**
 * Created by nikita on 27.06.17.
 */
export default class Base {
  constructor(x = 0, y = 0, z = false) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  getCordinate() {
    return `${this.x},${this.y},${this.z}`
  }
  rotate (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  clearPosition() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
}
