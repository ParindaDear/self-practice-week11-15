const startA = new Date('2025-11-02T10:00:00+07:00') 
const startB = new Date('2025-11-02T09:00:00+08:00') 

console.log(startA.toISOString())
console.log(startB.toISOString())

console.log(startA.getTime() > startB.getTime())