function mult(f) {
  let n = 1
  for (let n=1;n<=12;n++) {
    this[n.toString(10)]=f*n;
}}

let myTable = {}
for (let x=1;x<=12;x++) myTable[x.toString(10)] = new mult(x)
console.table(myTable)
