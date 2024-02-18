import MagDaemon from './magdaemon';

export default class Daemon extends MagDaemon {
  constructor (name, type = 'Daemon') {
    super(name, type);
  } 
}