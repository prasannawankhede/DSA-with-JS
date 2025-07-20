class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    loop(){
        let fast = this.head
        let slow = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
            
            if(fast === slow){
                return true
            }
        }
        return false
    }
}

module.exports = { LinkedList, Node } 