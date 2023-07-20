//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let age: number;

age = parseInt(prompt("ادخل العمر")) ;

if(age ==1 || age ==2){
  console.log("bebe");
}else if (age >=3 && age<=14){
  console.log("enfant");
}else if (age >= 15 && age <= 21){
  console.log("adult");
}else if (age>= 22){
  console.log("Homme")
}
