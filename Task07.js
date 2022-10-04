// 1.Solving problems using array functions on the rest countries' data.
  // a. Get all the countries from the Asia continent /region using the Filter function
  // b. Get all the countries with a population of less than 2 lakhs using Filter function
  // c. Print the following details name, capital, flag using forEach function
  // d. Print the total population of countries using reduce function
  // e. Print the country which uses US Dollars as currency.

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
var res=JSON.parse(request.response);
    // console.log(res);
// a.
var res1=res.filter((ele)=>ele.region=="Asia");
console.log(res1);
// b.
var res2=res.filter((ele)=>ele.population<200000);
console.log(res2);
// c.
var res3=res.forEach((ele)=>console.log(`Country Name : ${ele.name} , Capital : ${ele.capital} , Flags ; ${ele.flags.png}`));
console.log(res3);
// d.
var res4=res.reduce((acc,cv)=>acc+cv.population,0);
console.log(res4);
// e.
// var res5=res.filter((ele)=>ele.currencies.name=="United States dollar").map((ele)=>ele.name);
// console.log(res5);

};
