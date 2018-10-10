var addBinary = function(a, b) {
    let arr_a = a.split('');
    let arr_b = b.split('');
    let result = "";
    let carry_over_value = 0 ;
    let max_array_length = get_max_length(arr_a,arr_b);
    for(let a_idx = arr_a.length-1 , b_idx = arr_b.length-1 ; a_idx >= 0 || b_idx >= 0 ; a_idx--, b_idx--) {
      let a_val = arr_a[a_idx];
      let a_add_carry = add_values(parseInt(a_val),parseInt(carry_over_value));
      console.log(a_add_carry + ' is a add carry');
      let b_val = arr_b[b_idx];

      let a_add_b = add_values(parseInt(a_add_carry[0]),parseInt(b_val), a_add_carry[1]);
      console.log(a_add_b );
      carry_over_value = a_add_b[1];

      result = a_add_b[0] + result ;
    };
    if(carry_over_value===1) {
      result = 1+result;
    }
    console.log(result);
    return result;
};

const add_values = (val_a, val_b, carry_over_val) => {
    if(val_a === undefined || isNaN(val_a)) {
        return [val_b,0];
    }
    if(val_b === undefined || isNaN(val_b)) {
        return [val_a,carry_over_val];
    }

    if(val_a === 1 && val_b === 1 && carry_over_val===1) {
      return [1,1];
    }

    if(val_a === 0 && val_b ===0 && (carry_over_val === 0 || carry_over_val===undefined)) {
      return [0,0];
    }

    if(val_a === 0 && val_b === 0 && carry_over_val === 1) {
      return [0,1];
    }

    if(val_a === 1 && val_b === 1 ) {
       return [0,1];
    }
    if(carry_over_val === undefined) {
      return [1,0];
    }
    return [1,carry_over_val];
}


const get_max_length = (arr_a, arr_b) => {
     let max = arr_a.length;
    if(arr_b.length > arr_a.length) {
        max = arr_b.length;
    }
    return max;
}


addBinary('1010','1011');
