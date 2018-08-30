var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function getweather(){
   let city = document.querySelector("input").value;

$.ajax({
    url:`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca99713a21e5639ef89c88883d5231c6&units=metric`,
    success: function (data) {
console.log(data);
           
        document.querySelector(".temp > span").innerHTML= Math.round(data.main.temp);
        document.querySelector(".city-name > h1").innerHTML= data.name;
        document.querySelector(".temperature").innerHTML= Math.round(data.main.temp);
        document.querySelector(".wind").innerHTML= data.wind.speed;
        document.querySelector(".visi").innerHTML= data.visibility;
         document.querySelector(".humi").innerHTML= data.main.humidity;
         document.querySelector(".pres").innerHTML= data.main.pressure;
         document.querySelector(".speed").innerHTML= data.wind.speed;
        
    },
    error: function(err){
        console.log(err);
    }  
})
$.ajax({

    url:`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ca99713a21e5639ef89c88883d5231c6&units=metric`,
    success:function(data){
        console.log(data);
            var d1 = new Date(data.list[0].dt*1000); 
            var d2 = new Date(data.list[8].dt*1000); 
            var d3 = new Date(data.list[16].dt*1000); 
            var d4 = new Date(data.list[24].dt*1000); 
            var d5 = new Date(data.list[32].dt*1000); 
            document.querySelector(".date-1").innerHTML = days[d1.getDay()]; 
            document.querySelector(".date-2").innerHTML = days[d2.getDay()];        
            document.querySelector(".date-3").innerHTML = days[d3.getDay()];        
            document.querySelector(".date-4").innerHTML = days[d4.getDay()];  
            document.querySelector(".date-5").innerHTML = days[d5.getDay()]; 

            document.querySelector(".temp-mon").innerHTML =Math.round (data.list[0].main.temp);
            document.querySelector(".temp-tues").innerHTML =Math.round (data.list[8].main.temp);
            document.querySelector(".temp-wed").innerHTML =Math.round (data.list[16].main.temp);
            document.querySelector(".temp-thurs").innerHTML =Math.round (data.list[24].main.temp);
            document.querySelector(".temp-fri").innerHTML =Math.round (data.list[32].main.temp);
    }
})
}

function mySubmitFunction() {
	return false;
}