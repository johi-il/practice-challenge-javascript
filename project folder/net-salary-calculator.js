// salary after tax
// assignment expression
function gross(salary){
if(salary<=24000){
    console.log(salary*(0.9))
}else if(salary>=24001 && salary<=32333){
    console.log(salary*0.75)                //0.75 is the diffrence of 100% and tax rate converted to decimal
}
else if(salary>=32334 && salary<=500000){
    console.log(salary*0.7)
}else if(salary>=500001 && salary<=800000){
    console.log(salary*0.675)
}else{
    console.log(salary*0.65)
}

}
// lookup expression
gross(900000);//the parameter is assigned a value

//calculating nhif deduction

function nhif (salary){//salary is the input
    console.log(salary*0.0275 )  //output will be the nhif deduction
}

nhif(900000);


//nssf deductions

function nssf (salary){    // salary is the input 
    console.log(salary*0.06)
}

nssf(900000); //this is the nssf deduction


// calculating  tax paid
//the decimals are the tax rates but converted from %
//assignment expression
function tax(salary) {
  if (salary <= 24000) {
    console.log(salary * 0.1);
  } else if (salary >= 24001 && salary <= 32333) {
    console.log(salary * 0.25);
  } else if (salary >= 32334 && salary <= 500000) {
    console.log(salary * 0.3);
  } else if (salary >= 500001 && salary <= 800000) {
    console.log(salary * 0.325);
  } else {
    console.log(salary * 0.35);
  }
}
//lookup expression
tax(900000);





// calculating net salary = salary-tax-nssf-nhif

 const net =(9000000-(tax(900000)+ nssf(900000) + nhif(900000)));

