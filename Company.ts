
import InvalidQueue from "./IncvalidQueue";
class Company extends InvalidQueue {
  constructor(name: string) {
    super();
    console.log("constructor init");
    this.name = name;
  }

  private name: string;
  private _address: string = "";

  set address(address: string) {
    console.log("set address");
    if (this.isValidAddress(address)) {
      this._address = address;
    }
  }

  get address() {
    console.log("get address");
    return this._address;
  }

  public isValidAddress(address: string) {
    const reg = /[^省]+省[^市]+市+[^区]+区/;
    const flag = reg.test(address);
    if (!flag) {
      this.pushIn("请输入合法地址");
    }
    return flag;
  }
}

export default Company