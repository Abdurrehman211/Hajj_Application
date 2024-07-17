// Declare variables
var a, b, c, d, e, f, g, h, i, j, k, l, m;
var nmofhotel;
var custompackage;
var custompackage1;
var element = document.getElementById("ngt-Makkah");
var madina_inp = document.getElementById("ngt-Madina");
var plane;
var airfare;
var nmofhotelMadina;
var nights1 = 0; // Initialize with default value
var night2 = 0; // Initialize with default value
var price = 0; // Initialize with default value
var price1 = 0; // Initialize with default value
var package;
var hotel;
var lux;
var visafee;
var airlinefee;
var total = 0; // Initialize total variables
var total1 = 0;
var exchangeRateSARtoPKR; // Variable to store the exchange rate
var overalltotal;
var feeVisa;


async function fetchExchangeRate() {
    try {
        const response = await fetch('https://open.er-api.com/v6/latest/SAR');
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rate');
        }
        
        const data = await response.json();
        exchangeRateSARtoPKR = data.rates.PKR; // Store exchange rate for SAR to PKR in the variable
        document.getElementById("exg-rate").value = exchangeRateSARtoPKR;
        console.log('Exchange Rate (SAR to PKR):', exchangeRateSARtoPKR); // Log the fetched exchange rate
    } catch (error) {
        console.error('Error fetching exchange rate:', error); // Log any errors that occur during fetching
        // Handle error
    }
}

// Ensure that fetchExchangeRate is called after the window is loaded
window.onload = async function () {
    await fetchExchangeRate();
    // Other initialization code goes here if needed
};
function updateNightsForPackage() {
    var selectedPackage = document.getElementById("Package-selection").value;
    switch (selectedPackage) {
        case "15 Days":
            document.getElementById("ngt-Makkah").value = 7;
            nights1=7;
            document.getElementById("ngt-Madina").value = 7;
            night2=7;
            break;
        case "21 Days":
            document.getElementById("ngt-Makkah").value = 10;
            nights1=10;
            document.getElementById("ngt-Madina").value = 10;
            night2=10;
            break;
        case "30 Days":
            document.getElementById("ngt-Makkah").value = 15;
            nights1=15;
            document.getElementById("ngt-Madina").value = 14;
            night2=14;
            break;
        default:
            nights1=document.getElementById("ngt-Makkah").value;
            night2=document.getElementById("ngt-Madina").value;
            break;
    }
}

// Add event listener to package selection dropdown
document.getElementById("Package-selection").addEventListener("change", updateNightsForPackage);

// Function to update nights based on custom package
function updateNightsForCustomPackage() {
    var makkahNights = parseInt(document.getElementById("ngt-Makkah").value);
    var madinaNights = parseInt(document.getElementById("ngt-Madina").value);
    var totalNights = makkahNights + madinaNights;
    document.getElementById("Package-selection").innerHTML = totalNights + " days";
}

// // Add event listener to package selection dropdown
// document.getElementById("Package-selection").addEventListener("change", updateNightsForPackage);

// Function to update nights based on custom package
function updateNightsForCustomPackage() {
    var makkahNights = parseInt(document.getElementById("ngt-Makkah").value);
    var madinaNights = parseInt(document.getElementById("ngt-Madina").value);
    var totalNights = makkahNights + madinaNights;
    document.getElementById("Package-selection").innerHTML = totalNights + " days";
}


// Function to update the package value based on nights1 and night2
function updatePackage() {
    var packageValue = nights1 + night2;
}

// Function to update nights1 with the value from the input field for Makkah nights
function updateNights1() {
    nights1 = parseInt(document.getElementById("ngt-Makkah").value);
    updatePackage(); // Call updatePackage after updating nights1
}

// Function to update night2 with the value from the input field for Madina nights
function updateNight2() {
    night2 = parseInt(document.getElementById("ngt-Madina").value);
    updatePackage(); // Call updatePackage after updating night2
}

// Functions for selecting hotels
function hotel1() {
nmofhotel=document.getElementById("hotel-selection").value
console.log('name of hotel:',nmofhotel);
 }
function hotel2() {  document.getElementById("htl-name").innerHTML="hotel2";
document.getElementById("Pricelabel").value=50+"-per night";
nmofhotel="Hotel 2";
price=50;}
//madina hotels
 function hotel3()
 {
    document.getElementById("htl-name").innerHTML="hotel3";
 document.getElementById("Pricelabel").value=60+"-per night";
 nmofhotel="Hotel 3";
 price=60;
 }
 var nmofhotelMadina;
 function hotel4()
 {
    nmofhotelMadina=document.getElementById('madina-hotel-selection').value;
    console.log('Madina Hotel:',nmofhotelMadina);
 }
 function hotel5()
 {
    document.getElementById("dropdown").innerHTML="hotel2";
 document.getElementById("Pricelabel1").value=40+"-per night";
 nmofhotelMadina="Hotel 2";
 price1=30;
 }
 function hotel6()
 {
    document.getElementById("dropdown").innerHTML="hotel3";
 document.getElementById("Pricelabel1").value=50+"-per night";
 nmofhotelMadina="Hotel 3";
 price1=50;
 }




function packages1() {
   package=document.getElementById("Package-selection").value;

//    }
   console.log('package:',package)
}
function other(){
    document.getElementById("ngt-Makkah").value =nights1
    document.getElementById("ngt-Madina").value =night2
    package= night2+nights1;
    console.log("package:",package);
}
// Functions for selecting hotel types
function hoteltype1() {
   hotel= document.getElementById("hoteltype-selection").value;
   console.log('Hotel type:',hotel);
}
function visa() {
    visafee=document.getElementById("Visa-fee").value;
    console.log(visafee);
}


function airline(){
   
   plane=document.getElementById("Airline-selection").value;
    console.log('plane:',plane);
}
function airprice(){
    airfare=parseInt(document.getElementById('airline-price').value);
    console.log('Airfare:',airfare)
}
// Function for calculating total price
function calculate() {
    console.log('Exchange Rate:', exchangeRateSARtoPKR);
    console.log('Nights 1:', nights1);
    console.log('Price:', price);
    console.log('Airfare:', airfare);
    console.log('Visa Fee:', visafee);

    if (exchangeRateSARtoPKR && nights1 && price && airfare && visafee) {
        total = exchangeRateSARtoPKR * nights1 * price;
        airlinefee = exchangeRateSARtoPKR * airfare;
        feeVisa = exchangeRateSARtoPKR * visafee;
        document.getElementById("Visa-price").value = feeVisa.toFixed(2);
        document.getElementById("Airline-fare").value = airlinefee.toFixed(2);
        console.log('Visa Fee:', feeVisa);
        console.log('Airline Fee:', airlinefee);
        console.log('Total:', total);
        return total;
    }
}

// Function to calculate total price for Madina hotel
function calculate1() {
    console.log('Exchange Rate:', exchangeRateSARtoPKR);
    console.log('Night 2:', night2);
    console.log('Price1:', price1);
    if (exchangeRateSARtoPKR && night2 && price1) {
        total1 = exchangeRateSARtoPKR * night2 * price1;
        console.log('Total1:', total1);
    
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
    }

}
// Function for displaying total price
function show(){
    if (total && total1 && airlinefee && feeVisa) {
        Hotel_total = total + total1;
        document.getElementById("Hotel-price").value = Hotel_total.toFixed(2);
        overalltotal = total + total1 + airlinefee + feeVisa;
        document.getElementById("total-price").value = overalltotal.toFixed(2) + " Rs";
        console.log("overall total", overalltotal);
    } else {
        console.log("One or more required variables are not properly initialized.");
    }
}


// Function for sending data to WhatsApp
// Declare variables
var a, b, c, d, e, f, g, h, i, j, k, l, m;
var nmofhotel;
var custompackage;
var custompackage1;
var element = document.getElementById("ngt-Makkah");
var madina_inp = document.getElementById("ngt-Madina");
var plane;
var airfare;
var nmofhotelMadina;
var nights1 = 0; // Initialize with default value
var night2 = 0; // Initialize with default value
var price = 0; // Initialize with default value
var price1 = 0; // Initialize with default value
var package;
var hotel;
var lux;
var visafee;
var airlinefee;
var total = 0; // Initialize total variables
var total1 = 0;
var exchangeRateSARtoPKR; // Variable to store the exchange rate
var overalltotal;
var feeVisa;

async function fetchExchangeRate() {
    try {
        const response = await fetch('https://open.er-api.com/v6/latest/SAR');
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rate');
        }
        
        const data = await response.json();
        exchangeRateSARtoPKR = data.rates.PKR; // Store exchange rate for SAR to PKR in the variable
        document.getElementById("exg-rate").value = exchangeRateSARtoPKR;
        console.log('Exchange Rate (SAR to PKR):', exchangeRateSARtoPKR); // Log the fetched exchange rate
    } catch (error) {
        console.error('Error fetching exchange rate:', error); // Log any errors that occur during fetching
        // Handle error
    }
}


window.onload = async function () {
    await fetchExchangeRate();

};


function updateNightsForPackage() {
    var selectedPackage = document.getElementById("Package-selection").value;
    switch (selectedPackage) {
        case "15 Days":
            document.getElementById("ngt-Makkah").value = 7;
            nights1=7;
            document.getElementById("ngt-Madina").value = 7;
            night2=7;
            break;
        case "21 Days":
            document.getElementById("ngt-Makkah").value = 10;
            nights1=10;
            document.getElementById("ngt-Madina").value = 10;
            night2=10;
            break;
        case "30 Days":
            document.getElementById("ngt-Makkah").value = 15;
            nights1=15;
            document.getElementById("ngt-Madina").value = 14;
            night2=14;
            break;
        default:
            nights1=document.getElementById("ngt-Makkah").value;
            night2=document.getElementById("ngt-Madina").value;
            break;
    }
}

document.getElementById("Package-selection").addEventListener("change", updateNightsForPackage);

function updateNightsForCustomPackage() {
    var makkahNights = parseInt(document.getElementById("ngt-Makkah").value);
    var madinaNights = parseInt(document.getElementById("ngt-Madina").value);
    var totalNights = makkahNights + madinaNights;
    document.getElementById("Package-selection").innerHTML = totalNights + " days";
}


function updateNightsForCustomPackage() {
    var makkahNights = parseInt(document.getElementById("ngt-Makkah").value);
    var madinaNights = parseInt(document.getElementById("ngt-Madina").value);
    var totalNights = makkahNights + madinaNights;
    document.getElementById("Package-selection").innerHTML = totalNights + " days";
}


// Function to update the package value based on nights1 and night2
function updatePackage() {
    var packageValue = nights1 + night2;
}

// Function to update nights1 with the value from the input field for Makkah nights
function updateNights1() {
    nights1 = parseInt(document.getElementById("ngt-Makkah").value);
    updatePackage(); // Call updatePackage after updating nights1
}

// Function to update night2 with the value from the input field for Madina nights
function updateNight2() {
    night2 = parseInt(document.getElementById("ngt-Madina").value);
    updatePackage(); // Call updatePackage after updating night2
}

// Functions for selecting hotels
function hotel1() {
nmofhotel=document.getElementById("hotel-selection").value
console.log('name of hotel:',nmofhotel);
 }
function hotel2() {  document.getElementById("htl-name").innerHTML="hotel2";
document.getElementById("Pricelabel").value=50+"-per night";
nmofhotel="Hotel 2";
price=50;}
//madina hotels
 function hotel3()
 {
    document.getElementById("htl-name").innerHTML="hotel3";
 document.getElementById("Pricelabel").value=60+"-per night";
 nmofhotel="Hotel 3";
 price=60;
 }
 var nmofhotelMadina;
 function hotel4()
 {
    nmofhotelMadina=document.getElementById('madina-hotel-selection').value;
    console.log('Madina Hotel:',nmofhotelMadina);
 }
 function hotel5()
 {
    document.getElementById("dropdown").innerHTML="hotel2";
 document.getElementById("Pricelabel1").value=40+"-per night";
 nmofhotelMadina="Hotel 2";
 price1=30;
 }
 function hotel6()
 {
    document.getElementById("dropdown").innerHTML="hotel3";
 document.getElementById("Pricelabel1").value=50+"-per night";
 nmofhotelMadina="Hotel 3";
 price1=50;
 }





function packages1() {
   package=document.getElementById("Package-selection").value;

   console.log('package:',package)
}
function other(){
    document.getElementById("ngt-Makkah").value =nights1
    document.getElementById("ngt-Madina").value =night2
    package= night2+nights1;
    console.log("package:",package);
}
// Functions for selecting hotel types
function hoteltype1() {
   hotel= document.getElementById("hoteltype-selection").value;
   console.log('Hotel type:',hotel);
}
function hoteltype2(){
    document.getElementById("htl-type").innerHTML="QuadRoom";
    hotel="quad-room";
}
function hoteltype3(){
    document.getElementById("htl-type").innerHTML="TripleRoom";
    hotel="triple-room";
}
function hoteltype4(){
    document.getElementById("htl-type").innerHTML="DoubleRoom";
    hotel="double-room";
}
function luxury() {
    document.getElementById("lux-type").innerHTML="5-stars";
    lux="5-stars";
}
function luxury1(){
    document.getElementById("lux-type").innerHTML="4-stars";
    lux="4-stars";
}
function luxury2(){
    document.getElementById("lux-type").innerHTML="3-stars";
    lux="3-stars";
}
function luxury3(){
    document.getElementById("lux-type").innerHTML="2-stars";
    lux="2-stars";
}

function visa() {
    visafee=document.getElementById("Visa-fee").value;
    console.log(visafee);
}

function airline(){
 
   plane=document.getElementById("Airline-selection").value;
    console.log('plane:',plane);
}

function airprice(){
    airfare=parseInt(document.getElementById('airline-price').value);
    console.log('Airfare:',airfare)
}
// Function for calculating total price
function calculate() {
    console.log('Exchange Rate:', exchangeRateSARtoPKR);
    console.log('Nights 1:', nights1);
    console.log('Price:', price);
    console.log('Airfare:', airfare);
    console.log('Visa Fee:', visafee);

    if (exchangeRateSARtoPKR && nights1 && price && airfare && visafee) {
        total = exchangeRateSARtoPKR * nights1 * price;
        airlinefee = exchangeRateSARtoPKR * airfare;
        feeVisa = exchangeRateSARtoPKR * visafee;
        document.getElementById("Visa-price").value = feeVisa.toFixed(2);
        document.getElementById("Airline-fare").value = airlinefee.toFixed(2);
        console.log('Visa Fee:', feeVisa);
        console.log('Airline Fee:', airlinefee);
        console.log('Total:', total);
        return total;
    }
}

// Function to calculate total price for Madina hotel
function calculate1() {
    console.log('Exchange Rate:', exchangeRateSARtoPKR);
    console.log('Night 2:', night2);
    console.log('Price1:', price1);
    if (exchangeRateSARtoPKR && night2 && price1) {
        total1 = exchangeRateSARtoPKR * night2 * price1;
        console.log('Total1:', total1);
    
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
    }

}

function show(){
    if (total && total1 && airlinefee && feeVisa) {
        Hotel_total = total + total1;
        document.getElementById("Hotel-price").value = Hotel_total.toFixed(2);
        overalltotal = total + total1 + airlinefee + feeVisa;
        document.getElementById("total-price").value = overalltotal.toFixed(2) + " Rs";
        console.log("overall total", overalltotal);
    } else {
        console.log("One or more required variables are not properly initialized.");
    }
}


function sendToWhatsapp() {
    var encodedPackageDays = encodeURIComponent(package);
    var encodedNmofhotel = encodeURIComponent(nmofhotel);
    var encodedNmofhotelMadina = encodeURIComponent(nmofhotelMadina);
    var encodedHotelType = encodeURIComponent(hotel);
    var encodedPlane = encodeURIComponent(plane);
    var encodedOverallTotal = parseInt(encodeURIComponent(overalltotal));
    var contactNumber = document.getElementById("number").value; 
    var numOfPersons = document.getElementById("person").value; 
    var airlineClass = document.getElementById("airline_class").value;
    let checked0=document.getElementById("check1");
    let checked1=document.getElementById("check2");
    if (checked0.checked && checked1.checked) {
        // First if statement
        var link = `https://wa.me/${contactNumber}?text=Hey%20I%20want%20to%20book%20your%20package%20%21%0A`
    +`%0A%0A+-------BOOKING-DETAILS----------+%0A`
        + `%0APackage%20%3A${encodedPackageDays}+(${nights1}+days+,+${night2}+days)%0AMakkah%20hotel%3A%20${encodedNmofhotel}%20(${encodedHotelType})%0A+Makkah Hotel Price: ${price}+Dirhams+`
        + `%0AMadina%20hotel%3A%20${encodedNmofhotelMadina}%20(${encodedHotelType})%0AMadina Hotel price: ${price1}+Dirhams+%0AAirline%3A%20${encodedPlane}%0AAirline-Class:( ${airlineClass})%0ANo-of-Persons:(${numOfPersons})`
        + `%0AAirline-price+(${airfare})+%0AVisa-fee+(${visafee})+%0A%0ATotal%20price%3A%20${encodedOverallTotal}+RS%20%0APackage%20expires%20in%20few%20days`;
    } else if (checked0.checked) {
        // Second if statement
        var link = `https://wa.me/${contactNumber}?text=Hey%20I%20want%20to%20book%20your%20package%20%21%0A`
        +`%0A%0A+-------BOOKING-DETAILS----------+%0A`
            + `%0APackage%20%3A${encodedPackageDays}+(${nights1}+days+,+${night2}+days)%0AMakkah%20hotel%3A%20${encodedNmofhotel}%20(${encodedHotelType})%0A+Makkah Hotel Price: ${price}+Dirhams+`
            + `%0AMadina%20hotel%3A%20${encodedNmofhotelMadina}%20(${encodedHotelType})%0AMadina Hotel price: ${price1}+Dirhams+%0AAirline%3A%20${encodedPlane}%0AAirline-Class:( ${airlineClass})%0ANo-of-Persons:(${numOfPersons})`
            + `%0A+Airline_price%20+${airfare}%0A%0ATotal%20price%3A%20${encodedOverallTotal}+RS%20%0APackage%20expires%20in%20few%20days`;
    } else if (checked1.checked) {
        // Third if statement
        var link = `https://wa.me/${contactNumber}?text=Hey%20I%20want%20to%20book%20your%20package%20%21%0A`
        +`%0A%0A+-------BOOKING-DETAILS----------+%0A`
            + `%0APackage%20%3A${encodedPackageDays}+(${nights1}+days+,+${night2}+days)%0AMakkah%20hotel%3A%20${encodedNmofhotel}%20(${encodedHotelType})%0A+Makkah Hotel Price: ${price}+Dirhams+`
            + `%0AMadina%20hotel%3A%20${encodedNmofhotelMadina}%20(${encodedHotelType})%0AMadina Hotel price: ${price1}+Dirhams+%0AAirline%3A%20${encodedPlane}%0AAirline-Class:( ${airlineClass})%0ANo-of-Persons:(${numOfPersons})`
            + `%0A+Visa-fee+(${visafee})%0A%0ATotal%20price%3A%20${encodedOverallTotal}+RS%20%0APackage%20expires%20in%20few%20days`;
    } else {
        // Else statement
        var link = `https://wa.me/${contactNumber}?text=Hey%20I%20want%20to%20book%20your%20package%20%21%0A`
        +`%0A%0A+-------BOOKING-DETAILS----------+%0A`
            + `%0APackage%20%3A${encodedPackageDays}+(${nights1}+days+,+${night2}+days)%0AMakkah%20hotel%3A%20${encodedNmofhotel}%20(${encodedHotelType})%0A+Makkah Hotel Price: ${price}+Dirhams+`
            + `%0AMadina%20hotel%3A%20${encodedNmofhotelMadina}%20(${encodedHotelType})%0AMadina Hotel price: ${price1}+Dirhams+%0AAirline%3A%20${encodedPlane}%0AAirline-Class:( ${airlineClass})%0ANo-of-Persons:(${numOfPersons})`
            + `%0A%0A%0ATotal%20price%3A%20${encodedOverallTotal}+RS%20%0APackage%20expires%20in%20few%20days`;
    }
    
    // if  (checked0.checked && checked1.checked){
    //     var link = `https://wa.me/${contactNumber}?text=Hey%20I%20want%20to%20book%20your%20package%20%21%0A`
    // +`%0A%0A+-------BOOKING-DETAILS----------+%0A`
    //     + `%0APackage%20%3A${encodedPackageDays}+(${nights1}+days+,+${night2}+days)%0AMakkah%20hotel%3A%20${encodedNmofhotel}%20(${encodedHotelType})%0A+Makkah Hotel Price: ${price}+Dirhams+`
    //     + `%0AMadina%20hotel%3A%20${encodedNmofhotelMadina}%20(${encodedHotelType})%0AMadina Hotel price: ${price1}+Dirhams+%0AAirline%3A%20${encodedPlane}%0AAirline-Class:( ${airlineClass})%0ANo-of-Persons:(${numOfPersons})`
    //     + `%0Airline-price+(${airfare})+%0AVisa-fee+(${visafee})+%0A%0ATotal%20price%3A%20${encodedOverallTotal}+RS%20%0APackage%20expires%20in%20few%20days`;
    // }

    // if (checked0.checked){
    //     var link = `https://wa.me/${contactNumber}?text=Hey%20I%20want%20to%20book%20your%20package%20%21%0A`
    //     +`%0A%0A+-------BOOKING-DETAILS----------+%0A`
    //         + `%0APackage%20%3A${encodedPackageDays}+(${nights1}+days+,+${night2}+days)%0AMakkah%20hotel%3A%20${encodedNmofhotel}%20(${encodedHotelType})%0A+Makkah Hotel Price: ${price}+Dirhams+`
    //         + `%0AMadina%20hotel%3A%20${encodedNmofhotelMadina}%20(${encodedHotelType})%0AMadina Hotel price: ${price1}+Dirhams+%0AAirline%3A%20${encodedPlane}%0AAirline-Class:( ${airlineClass})%0ANo-of-Persons:(${numOfPersons})`
    //         + `%0A+Airline_price%20+${airfare}%0A%0ATotal%20price%3A%20${encodedOverallTotal}+RS%20%0APackage%20expires%20in%20few%20days`;
    // }
    // if (checked1.checked) {
    //     var link = `https://wa.me/${contactNumber}?text=Hey%20I%20want%20to%20book%20your%20package%20%21%0A`
    //     +`%0A%0A+-------BOOKING-DETAILS----------+%0A`
    //         + `%0APackage%20%3A${encodedPackageDays}+(${nights1}+days+,+${night2}+days)%0AMakkah%20hotel%3A%20${encodedNmofhotel}%20(${encodedHotelType})%0A+Makkah Hotel Price: ${price}+Dirhams+`
    //         + `%0AMadina%20hotel%3A%20${encodedNmofhotelMadina}%20(${encodedHotelType})%0AMadina Hotel price: ${price1}+Dirhams+%0AAirline%3A%20${encodedPlane}%0AAirline-Class:( ${airlineClass})%0ANo-of-Persons:(${numOfPersons})`
    //         + `%0A+Visa-fee+(${visafee})%0A%0ATotal%20price%3A%20${encodedOverallTotal}+RS%20%0APackage%20expires%20in%20few%20days`;
    // } else {
    // var link = `https://wa.me/${contactNumber}?text=Hey%20I%20want%20to%20book%20your%20package%20%21%0A`
    // +`%0A%0A+-------BOOKING-DETAILS----------+%0A`
    //     + `%0APackage%20%3A${encodedPackageDays}+(${nights1}+days+,+${night2}+days)%0AMakkah%20hotel%3A%20${encodedNmofhotel}%20(${encodedHotelType})%0A+Makkah Hotel Price: ${price}+Dirhams+`
    //     + `%0AMadina%20hotel%3A%20${encodedNmofhotelMadina}%20(${encodedHotelType})%0AMadina Hotel price: ${price1}+Dirhams+%0AAirline%3A%20${encodedPlane}%0AAirline-Class:( ${airlineClass})%0ANo-of-Persons:(${numOfPersons})`
    //     + `%0A%0A%0ATotal%20price%3A%20${encodedOverallTotal}+RS%20%0APackage%20expires%20in%20few%20days`;
    // }
        console.log("Generated URL:", link);
window.open(link,"_blank").focus;
}
function save() {
    localStorage.setItem('package',package);
    localStorage.setItem('Hotel-Type',hotel);
    localStorage.setItem('Mak-Night',nights1);
    localStorage.setItem('Mad-Night',night2);
    localStorage.setItem('Mak-Hotel',nmofhotel);
    localStorage.setItem('Mad-Hotel',nmofhotelMadina);
    localStorage.setItem('Mak-Hotelprice',price);
    localStorage.setItem('Mad-Hotelprice',price1);
    localStorage.setItem('Visafee',visafee);
    localStorage.setItem('Airline',plane);
    localStorage.setItem('Airline-fare',airfare);
    Swal.fire({
        title: "Good job!",
        text: "Your Information is saved!",
        icon: "success"
      });
      sendToWhatsapp();
}

// Function for retrieving data from localStorage
function retrieve() {
    // Retrieve data from localStorage
    var retrievedPackage = localStorage.getItem('package');
    var retrievedHotelType = localStorage.getItem('Hotel-Type');
    var retrievedMakNight = parseInt(localStorage.getItem('Mak-Night'));
    var retrievedMadNight = parseInt(localStorage.getItem('Mad-Night'));
    var retrievedMakHotel = localStorage.getItem('Mak-Hotel');
    var retrievedMadHotel = localStorage.getItem('Mad-Hotel');
    var retrievedMakHotelPrice = parseFloat(localStorage.getItem('Mak-Hotelprice'));
    var retrievedMadHotelPrice = parseFloat(localStorage.getItem('Mad-Hotelprice'));
    var retrievedVisaFee = parseFloat(localStorage.getItem('Visafee'));
    var retrievedAirlineFare = parseFloat(localStorage.getItem('Airline-fare'));

    // Log the data types of retrieved values
    console.log('Package:', typeof retrievedPackage, retrievedPackage);
    console.log('Hotel Type:', typeof retrievedHotelType, retrievedHotelType);
    console.log('Makkah Night:', typeof retrievedMakNight, retrievedMakNight);
    console.log('Madina Night:', typeof retrievedMadNight, retrievedMadNight);
    console.log('Makkah Hotel:', typeof retrievedMakHotel, retrievedMakHotel);
    console.log('Madina Hotel:', typeof retrievedMadHotel, retrievedMadHotel);
    console.log('Makkah Hotel Price:', typeof retrievedMakHotelPrice, retrievedMakHotelPrice);
    console.log('Madina Hotel Price:', typeof retrievedMadHotelPrice, retrievedMadHotelPrice);
    console.log('Visa Fee:', typeof retrievedVisaFee, retrievedVisaFee);
    console.log('Airline Fare:', typeof retrievedAirlineFare, retrievedAirlineFare);

    // Update HTML elements with retrieved values
    document.getElementById("Package-selection").innerHTML = retrievedPackage;
    document.getElementById("hoteltype-selection").innerHTML = retrievedHotelType;
    document.getElementById("ngt-Makkah").value = retrievedMakNight;
    document.getElementById("ngt-Madina").value = retrievedMadNight;
    document.getElementById("hotel-selection").innerHTML = retrievedMakHotel;
    document.getElementById("madina-hotel-selection").innerHTML = retrievedMadHotel;
    document.getElementById("Pricelabel").value = retrievedMakHotelPrice;
    document.getElementById("Pricelabel1").value = retrievedMadHotelPrice;
    document.getElementById("Visa-fee").value = retrievedVisaFee;
    document.getElementById("airline-price").value = retrievedAirlineFare;
}

// Function for deleting data from localStorage
function deleteData(){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                allowOutsideClick: "false",
            });
            localStorage.clear();
        } else {
            Swal.fire({
                title: "Error ",
                text: "Unknown Error Occurred !",
                icon: "error",
                allowOutsideClick: "allowOutsideClick",
            });
        }
    });
}

// Function to handle input field changes and update the package
async function others() {
    var makkahNights = parseInt(document.getElementById("ngt-Makkah").value);
    var madinaNights = parseInt(document.getElementById("ngt-Madina").value);
    
    if (!isNaN(makkahNights) && !isNaN(madinaNights)) {
        var package = makkahNights + madinaNights;
        document.getElementById("dropdown1").innerHTML = package;
        element = makkahNights;
        madina_inp = madinaNights;
    } else {
        Swal.fire({
            title: "Error",
            text: "Please enter valid numbers for Makkah and Madina nights",
            icon: "error",
        });
    }
}

// Ensure that fetchExchangeRate is called after the window is loaded
// window.onload = async function () {
//    retrieve();
//    fetchExchangeRate();
// };


// Function for saving data to localStorage
function save() {
    localStorage.setItem('package',package);
    localStorage.setItem('Hotel-Type',hotel);
    localStorage.setItem('Mak-Night',nights1);
    localStorage.setItem('Mad-Night',night2);
    localStorage.setItem('Mak-Hotel',nmofhotel);
    localStorage.setItem('Mad-Hotel',nmofhotelMadina);
    localStorage.setItem('Mak-Hotelprice',price);
    localStorage.setItem('Mad-Hotelprice',price1);
    localStorage.setItem('Visafee',visafee);
    localStorage.setItem('Airline',plane);
    localStorage.setItem('Airline-fare',airfare);
    Swal.fire({
        title: "Good job!",
        text: "Your Information is saved!",
        icon: "success"
      });
      sendToWhatsapp();
}

// Function for retrieving data from localStorage
function retrieve() {
    // Retrieve data from localStorage

    var retrievedMakNight = parseInt(localStorage.getItem('Mak-Night'));
    var retrievedMadNight = parseInt(localStorage.getItem('Mad-Night'));
    var retrievedMakHotelPrice = parseFloat(localStorage.getItem('Mak-Hotelprice'));
    var retrievedMadHotelPrice = parseFloat(localStorage.getItem('Mad-Hotelprice'));
    var retrievedVisaFee = parseFloat(localStorage.getItem('Visafee'));
    var retrievedAirlineFare = parseFloat(localStorage.getItem('Airline-fare'));

    // Log the data types of retrieved values
   
    console.log('Makkah Night:', typeof retrievedMakNight, retrievedMakNight);
    console.log('Madina Night:', typeof retrievedMadNight, retrievedMadNight);

    console.log('Makkah Hotel Price:', typeof retrievedMakHotelPrice, retrievedMakHotelPrice);
    console.log('Madina Hotel Price:', typeof retrievedMadHotelPrice, retrievedMadHotelPrice);
    console.log('Visa Fee:', typeof retrievedVisaFee, retrievedVisaFee);
    console.log('Airline Fare:', typeof retrievedAirlineFare, retrievedAirlineFare);

    // Update HTML elements with retrieved values
    document.getElementById("ngt-Makkah").value = retrievedMakNight;
    document.getElementById("ngt-Madina").value = retrievedMadNight;
    document.getElementById("Pricelabel").value = retrievedMakHotelPrice;
    document.getElementById("Pricelabel1").value = retrievedMadHotelPrice;
    document.getElementById("Visa-fee").value = retrievedVisaFee;
    document.getElementById("airline-price").value = retrievedAirlineFare;
}

// Function for deleting data from localStorage
function deleteData(){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                allowOutsideClick: "false",
            });
            localStorage.clear();
        } else {
            Swal.fire({
                title: "Error ",
                text: "Unknown Error Occurred !",
                icon: "error",
                allowOutsideClick: "allowOutsideClick",
            });
        }
    });
}
function checking(){
    if(ischecked){
        sendToWhatsapp();
    }
}
// Function to handle input field changes and update the package
async function others() {
    var makkahNights = parseInt(document.getElementById("ngt-Makkah").value);
    var madinaNights = parseInt(document.getElementById("ngt-Madina").value);
    
    if (!isNaN(makkahNights) && !isNaN(madinaNights)) {
        var package = makkahNights + madinaNights;
        document.getElementById("dropdown1").innerHTML = package;
        element = makkahNights;
        madina_inp = madinaNights;
    } else {
        Swal.fire({
            title: "Error",
            text: "Please enter valid numbers for Makkah and Madina nights",
            icon: "error",
        });
    }
}

// Ensure that fetchExchangeRate is called after the window is loaded
window.onload = async function () {
   retrieve();
   fetchExchangeRate();
};
function ModeChange() {
    const checkbox = document.querySelector('.bb8-toggle__checkbox');
    const body = document.body; 
   
    if (checkbox.checked) {
      
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark-theme');
    } else {
 
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light-theme');
    }
  }
  
  // Load the saved theme from localStorage
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const checkbox = document.querySelector('.bb8-toggle__checkbox');
  
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      checkbox.checked = savedTheme === 'dark-theme';
    } else {
      document.body.classList.add('light-theme');
    }
  });