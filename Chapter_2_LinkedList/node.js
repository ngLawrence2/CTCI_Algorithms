class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }

  printList() {
    let curr = this;
    while(curr !== null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

module.exports = Node;
