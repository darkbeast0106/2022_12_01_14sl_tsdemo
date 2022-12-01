export default class Teglalap {
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  kerulet = (): number => {
    return 2 * (this.a + this.b);
  };

  terulet = (): number => {
    return this.a * this.b;
  };
}
