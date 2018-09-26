class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }

  printList() {
    let curr = this;
    while(curr.next.data !== null) {
      console.log(curr.next.data);
      curr = curr.next;
    }
  }
}

module.exports = Node;
