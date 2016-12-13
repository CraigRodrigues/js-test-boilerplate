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

export function Animal() {}
Animal.SOUND = 'generic sound';
Animal.prototype.speak = function () {
  return Animal.SOUND;
};

Reptile.prototype = Object.create(Animal.prototype);
export function Reptile() {}
Reptile.SOUND = 'Hisss!'
Reptile.prototype.speak = function () {
 return Reptile.SOUND; 
}

Primate.prototype = Object.create(Animal.prototype);
export function Primate() {}
Primate.SOUND = 'George want banana.'
Primate.prototype.speak = function () {
  return Primate.SOUND;
}

Human.prototype = Object.create(Primate.prototype);
export function Human() {}
Human.SOUND = 'hello'
Human.prototype.speak = function () {
  return Human.SOUND;
}

