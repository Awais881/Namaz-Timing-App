function getNamazTiming (){
       const city=document.getElementById("city").value


   // Make a request for a user with a given ID
   axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=pakistan&method=1`)
       .then(function (response) {
    // handle success
    const data=response.data
    console.log(data);
    let fajr = data.data.timings.Fajr;
    let sunrise = data.data.timings.Sunrise;
    let dhuhr = data.data.timings.Dhuhr;
    let imsak = data.data.timings.Imsak;
    let asr = data.data.timings.Asr;
    let maghrib = data.data.timings.Maghrib;
    let isha = data.data.timings.Isha;
    let midnight = data.data.timings.Midnight;
    console.log(fajr, sunrise, dhuhr, asr, maghrib, isha, imsak, midnight);
    // get date
    let date = data.data.date.readable;
    console.log(date);


    document.querySelector("#date").innerHTML=date;
    document.querySelector("#fajr-timimg").innerHTML=fajr;
    document.querySelector("#sunrise-timimg").innerHTML=sunrise;
    document.querySelector("#dhuhr-timimg").innerHTML=dhuhr;
    document.querySelector("#imsak-timimg").innerHTML=imsak;
    document.querySelector("#asr-timimg").innerHTML=asr;
    document.querySelector("#maghrib-timimg").innerHTML=maghrib;
    document.querySelector("#isha-timimg").innerHTML=maghrib;
    document.querySelector("#midnight-timimg").innerHTML=midnight;






    })
 

}

// getNamazTiming();
         