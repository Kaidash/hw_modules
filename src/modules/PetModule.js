/**
 * Created by nikita on 21.06.17.
 */

export function getByConstructor(obj) {
  if (obj.constructor.name === 'Cat') {
    console.log(obj.name,obj.family,obj.color)
  } else if (obj.constructor.name === 'Cat') {
    console.log(obj.name,obj.family)
  }
}
export function Animal (name, family) {
  this.name = name;
  this.family = family
}
export function Pet (name, family) {
  Animal.apply(this, arguments)
}
export function Cat (name, family, color) {
  Animal.apply(this, arguments);
  this.color = color;
}
