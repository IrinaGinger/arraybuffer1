import Character from './character';

export default class MagDaemon extends Character {
  constructor (name, type) {
    super(name, type);                  
    this.defence = 40; 
    this._stoned = false; 
    this._distance = 1;
  } 

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get distance() {
    return this._distance;
  }

  set distance(x) {
    this._distance = x;
  }

  get attack() {
    let k = 0;
    if (this._stoned) {
      k = Math.log2(this._distance) * 5;
    }
    return this._attack * (1 - (this._distance - 1) * 0.1) - k;
  }

  set attack(base) {
    this._attack = base;
  }
}