// Duck Typing
// ---------------------------------------------------------------------
//
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
//
// Type checking focuses on the “shape” that values have

// Sometimes called “structural typing”

// ---------------------------------------------------------------------

interface Point {
  x: number;
  y: number;
}

function logPoint(point: Point) {
  console.log(`${point.x}, ${point.y}`);
}

// ---------------------------------------------------------------------

const point = { x: 12, y: 26 }; // never declared to be a Point

logPoint(point); // but Point shaped

// ---------------------------------------------------------------------

const rectangle = { x: 33, y: 3, width: 30, height: 80 };
const color = { hex: "#187ABF" };

logPoint(rectangle); // shape-matching only requires a subset of the object’s fields to match
// logPoint(color); // Type '{ hex: string; }' is missing the following properties from type 'Point': x, y

// ---------------------------------------------------------------------

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const virtualPoint = new VirtualPoint(13, 56); // never declared to be a Point

logPoint(virtualPoint); // but Point shaped
