export default class Enum<T> {
  value: any;

  [key: string]: any; // TODO: Fix this trash

  constructor(value: T) {
    this.value = value;
  }

  toString(): string {
    return String(this.value);
  }
}
