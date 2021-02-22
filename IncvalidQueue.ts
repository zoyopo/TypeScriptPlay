class InvalidQueue {
  public queue: string[] = [];
  public pushIn(invalidMsg: string) {
    this.queue.push(invalidMsg);
  }
}

export default InvalidQueue
