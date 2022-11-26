const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");
const tem_real_val = document.getElementById("tem_real_val");
const temp_status = document.getElementById("temp_status")
const datahide = document.querySelector(".middle_layer"); 

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
      city_name.innerText = `Please write the name before search`;
      datahide.classList.add("data_hide"); 
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=dea5d2d317022630ef6245327815bdc3`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            tem_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            const tempStatus = arrData[0].weather[0].main;

            //condition to check sunny or cloudy
            if (tempStatus == "Clear") {
                temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempStatus == "Clouds") {
                temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempStatus == "Rain") {
                temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }
            datahide.classList.remove("data_hide");
        }
        catch{
            city_name.innerText = `Please enter the city name properly`;
            datahide.classList.add("data_hide");
        }
       
    }
}

submitBtn.addEventListener("click", getInfo);

