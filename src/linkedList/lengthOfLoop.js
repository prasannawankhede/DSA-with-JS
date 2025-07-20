class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

    lengthOfLoop(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next

            if(slow === fast){

                let count = 1
                fast = fast.next

                while(slow !== fast){
                    count++
                    fast = fast.next
                }
                return count
            }
        }
        return null
    }
}
module.exports = { LinkedList, Node } 