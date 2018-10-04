//removes nodes with value val in linked list
// ex : 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 3 -> 8 , 3
// output : 1 -> 2 -> 4 -> 5 -> 6 -> 8

var removeElements = function(head, val) {
    while(head!==null && head.val === val) {
        head = head.next;
    }
    let current = head;
    while(current!==null) {
        let next = current.next;
        while(next!==null && next.val===val) {
            next = next.next;
        }
        current.next = next;
        current = current.next;
    }
    return head;

};
