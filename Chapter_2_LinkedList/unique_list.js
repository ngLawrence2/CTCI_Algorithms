
var deleteDuplicates = function(head) {
    if(head===null) {
        return null;
    }
    let set = new Set();
    let result = head;
    let current = result;
    set.add(head.val);
    head=head.next;
    while(head!==null) {
        if(set.has(head.val)) {
            head=head.next;
            current.next=null;
        } else {
            set.add(head.val);
            console.log("next " + head.val);
            current.next = head;
            current=current.next;
            head=head.next;
        }
    }
    return result;
};
