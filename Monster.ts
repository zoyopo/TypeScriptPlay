export  type Action = { [props: string]: () => void };
class Monster {
  public blood: number = 100;
  public name: string;

  constructor(name: string, blood: number, actionQueue: Action) {
    this.name = name;
    this.actionQueue = actionQueue;
    this.blood = blood;
   
  }

  public actionQueue: Action = {};

  public onAction(event: string) {
    this.actionQueue[event] && this.actionQueue[event].call(this);
  }
}

export default Monster