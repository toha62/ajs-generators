/* eslint-disable no-plusplus */
export default class Team {
  constructor() {
    this.team = [];
  }

  add(character) {
    this.team.push(character);
  }

  * [Symbol.iterator]() {
    for (const char of this.team) {
      yield char;
    }
  }
}
