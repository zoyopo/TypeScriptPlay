import Monster,{Action} from "./Monster";

class Dragon extends Monster {
  constructor(name:string,blood: number, actionQueue: Action) {
    super(name,blood, actionQueue);
  }

  public attck(){
    return this.onAction('attack')
  }

  public sleep(){
    return this.onAction('sleep')
  }
}

export default Dragon
