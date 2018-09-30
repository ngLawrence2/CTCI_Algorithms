//uses bfs to go through levels
var isSameTree = function(p, q) {
    let q_queue=[];
    let p_queue=[];
    if(p!==null) {
        p_queue.push(p);
    }
    if(q!==null) {
        q_queue.push(q);
    }
    if(q_queue.length !== p_queue.length) {
        return false;
    }
    while(p_queue.length > 0) {
        let p_curr = p_queue.shift();
        let q_curr = q_queue.shift();

        //values in root are not equal
        if(p_curr.val !== q_curr.val) {
            return false;
        }
        //we have a left in both
        if(p_curr.left !==null && q_curr.left!==null) {
            q_queue.push(q_curr.left);
            p_queue.push(p_curr.left);
        }

        // only one of them have a left
        if((p_curr.left!==null && q_curr.left===null) || (p_curr.left===null && q_curr.left!==null)) {
            return false;
        }

        if(p_curr.right!==null && q_curr.right!==null) {
            q_queue.push(q_curr.right);
            p_queue.push(p_curr.right);
        }
        if((p_curr.right!==null && q_curr.right===null) || (p_curr.right===null && q_curr.right!==null)) {
            return false;
        }


    }
    return true;
};
