/**
 * Created by nikita on 27.06.17.
 */
import Furniture from './FurnitureModule';

export default class Chair extends Furniture {
  constructor (height, width){
    super();
    this.height = height;
    this.width = width;
  }
  getCordinate () {
    let coordinate = super.getCordinate();
    return `${coordinate}, h = ${this.height}, w = ${this.width}`
  }
}
