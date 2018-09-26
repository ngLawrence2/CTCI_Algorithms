class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }

  printList() {
    let current = this.next;
    while(current!=null) {
      console.log(current.data);
    }
  }
}

module.exports = Node;
