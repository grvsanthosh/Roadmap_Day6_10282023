// https://restcountries.com/v3.1/all

const xhr = new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();

xhr.onload = function() {
    const jsobj = JSON.parse(xhr.responseText);
    // console.log(jsobj);
// Get all the countries from Asia continent /region using Filter function
    

       const countryAsia = jsobj.filter((val) => val.region ==="Asia");
       for (let val of countryAsia) {
        console.log(`Country : ${val.name.common} and it is in ${val.region}`);
       }
   

// Get all the countries with a population of less than 2 lakhs using Filter function

const countrypop = jsobj.filter((val) => val.population < 200000);
for ( let popval of countrypop){
    console.log(`Country : ${popval.name.common} & population : ${popval.population}`);
}

// Print the following details name, capital, flag, using forEach function

function countrydetails(Name){

    console.log(`Name : ${Name.name.common}, Capital : ${Name.capital}, Flag ${Name.flag}`);
}

jsobj.forEach(countrydetails);

// Print the total population of countries using reduce function

const totalPopulation = jsobj.reduce((preval,currval) => {
    if (typeof (preval) === 'object'){
        preval = preval.population;
    }
    return currval.population + preval
})

console.log(totalPopulation);

// Print the country that uses US dollars as currency.

const countryDollar = jsobj.filter((val) => {

    const { currencies={}} = val;

    return Object.keys(currencies).includes("USD");
   

})
console.log(countryDollar);
}