const num = [5, 10, 25];

function average(arr){
  let total = 0;
  arr.forEach(function(i){
    total = total + i;
  });
  return total/arr.length;
}

console.log(average(num));