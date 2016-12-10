export function double ( x ) {
  return x * 2;
}

export function doubleXTimes ( x, num ) {
  let result = x;

  for ( let i = 1; i <= num; i++ ) {
    // result = result * 2;
    result = double( result );
  }

  return result;
}

export function doubleEach ( arr ) {
  let result = arr.map( double );

  // const result = arr.map( x => double( x ) );
  // const result = arr.map( function ( x ) {
  //   return double( x );
  // });

  return result;
}

export function Animal() {
  this.name = 'generic name';
  this.speak = 'generic sound';
}

Reptile.prototype = Object.create(Animal.prototype);

export function Reptile() {
  Animal.apply(this);
  this.speak = () => console.log('Snakes be on a plane!');
}

