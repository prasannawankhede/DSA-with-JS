class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  reverse(){
    let temp = this.head
    let prev = null
    while(temp){
        let front = temp.next
        temp.next = prev
        prev = temp
        temp = front
    }
    return prev
  }
}
module.exports = { LinkedList, Node } 