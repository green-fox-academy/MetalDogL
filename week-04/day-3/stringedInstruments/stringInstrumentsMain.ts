abstract class Instrument {
  abstract name: string;
  abstract play();
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  abstract sound();
}

class ElectricGuitar extends StringedInstrument {
  name: string = 'ElectricGuitar';

  constructor (strings: number = 6) {
    super();
    this.numberOfStrings = strings;
  }

  sound() {
    return 'Twang';
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings} instrument that goes ${this.sound}.');
  }
}