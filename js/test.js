export default class Test {
  constructor() {
    this.text = 'hello world';
    this.newText = this.textFunction();
  }

  textFunction() {
    return this.text.length;
  }
}
