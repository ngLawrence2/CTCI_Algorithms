const reverse_list = head => {
  let prev = null;
  let next = null;
  while(head!==null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

let l3 = {
  next: null,
  val: 3
};

let l2 = {
  next: l3,
  val: 2
};
let l1 = {
  next: l2,
  val: 1
};


let res = reverse_list(l1);
while(res!==null) {
  console.log(res.val);
  res=res.next;
}
