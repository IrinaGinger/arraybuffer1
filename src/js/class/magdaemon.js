import Character from './character';

export default class MagDaemon extends Character {
  constructor (name, type) {
    super(name, type);                  
    this.defence = 40; 
    this._stoned = false; 
  } 

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    return this._attack;
  }

  set attack(x) {
    this._attack = 100 * (1 - (x - 1) * 0.1);

    if (this.stoned) {
        this._attack = this._attack - Math.log2(x) * 5;
    }
  }
}