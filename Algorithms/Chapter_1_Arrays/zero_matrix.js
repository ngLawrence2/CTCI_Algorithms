// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.


const zero_matrix = array => {
  let rows_columns = [];
  for(let i = 0 ; i < array.length ;i++) {
    for(let j = 0; j < array.length ; j++) {
      let curr_num = array[i][j];
      if(curr_num === 0 ) {
         rows_columns.push([i,j]);
      }
    }
  }
  for(let i = 0 ; i < rows_columns.length ; i++) {
    let row = rows_columns[i][0];
    let col = rows_columns[i][1];
    change_zero(array,row,col);
  }

  print_array(array);

}

const change_zero = (array, row, column) => {
  let current_row = array[row];
  for(let i = 0 ; i < current_row.length; i++) {
    current_row[i] = 0;
  }
  for(let i = 0 ; i < array.length ; i++) {
    array[i][column] = 0;
  }
  return array;
}



const print_array = array => {
  for(let i = 0 ; i < array.length; i++) {
    console.log(array[i].toString());
  }
}

let array = [
  [1,2, 0],
  [3,4, 2],
  [5,0, 1]
];
result = zero_matrix(array);
