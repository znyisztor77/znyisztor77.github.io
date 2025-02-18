/*
//https://api.open-meteo.com/v1/forecast?latitude=47.5317&longitude=21.6244&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=GMT
//https://archive-api.open-meteo.com/v1/archive?latitude=47.5317&longitude=21.6244&start_date=2025-01-01&end_date=2025-01-25&daily=temperature_2m_max&timezone=GMT

let cards = document.getElementById('cards')

const BASE_URL = "https://archive-api.open-meteo.com/v1/archive?"
const LATITUDE = "latitude=47.5317"
const LONGITUDE ="longitude=21.6244"
const STARTDATE = "start_date=2025-01-01"
const ENDDATE = "end_date=2025-01-01"
//const DAILY = "temperature_2m_max,temperature_2m_min,rain_sum"
const DAILY = "temperature_2m_max"
const today = new Date();
const formattedDate = today.toISOString().slice(0, 10);


fetch(`${BASE_URL}${LATITUDE}&${LONGITUDE}&start_date=${STARTDATE}&end_date=${ENDDATE}&daily = ${DAILY}`)
.then(res => res.json())
.then(data =>{
       console.log(data);
       for(let i = 0; i <data.daily.time.length ;i++){
        card = `<div class="card">
        <div class="date">${data.daily.time[i]}</div>
        <div class="max_temp">${data.daily.temperature_2m_max[i]}°C</div>
        
        <div class="max_temp">${formattedDate}}</div-->
        <!--div class="rain_sum">${data.daily.rain_sum[i]}mm</div-->
    </div>`
    cards.innerHTML += card
       }
})*/

//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Debrecen/2025-01-01/2025-01-27?unitGroup=metric&include=days&key=KBBNNGHACUND6EXNXQ6JH424F&contentType=json
//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Debrecen/2025-01-01/2025-01-27?unitGroup=metric&include=days&key=KBBNNGHACUND6EXNXQ6JH424F&contentType=json
/*
// JavaScript script to fetch and display weather data dynamically in cards
// Ez jól működik de csak napi átlagot mutat
const BASE_URL = "https://archive-api.open-meteo.com/v1/archive?";
const LATITUDE = "latitude=47.5317";
const LONGITUDE = "longitude=21.6244";
const STARTDATE = "start_date=2025-01-01";

const cards = document.getElementById('cards');
const today = new Date();
const formattedDate = today.toISOString().slice(0, 10);

fetch(`${BASE_URL}${LATITUDE}&${LONGITUDE}&${STARTDATE}&end_date=${formattedDate}&daily=temperature_2m_max`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.daily && data.daily.time && data.daily.temperature_2m_max) {
            for (let i = 0; i < data.daily.time.length; i++) {
              //const roundedTemp = Math.round(data.daily.temperature_2m_max[i] * 2) / 2; // Round to nearest 0.5
              const roundedTemp = Math.round(data.daily.temperature_2m_max[i]); // Round to nearest integer
                const card = `
                    <div class="card">
                        <div class="date">${data.daily.time[i]}</div>
                        <!--div class="max_temp">Max Temp: ${data.daily.temperature_2m_max[i]}°C</div-->
                        <div class="max_temp">Max Temp: ${roundedTemp}°C</div>
                    </div>`;
                cards.innerHTML += card;
            }
        } else {
            cards.innerHTML = '<div class="error">No data available</div>';
        }
    })
    .catch(err => {
        console.error('Error fetching data:', err);
        cards.innerHTML = '<div class="error">Failed to load data</div>';
    });
*/
/*
// JavaScript script to fetch and display weather data dynamically in cards
//Ez már jól mutatja az adatokat
const START_DATE = "2025-01-01";
const today = new Date();
const formattedDate = today.toISOString().slice(0, 10);
const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Debrecen/${START_DATE}/${formattedDate}?unitGroup=metric&include=days&key=KBBNNGHACUND6EXNXQ6JH424F&contentType=json`;

const cards = document.getElementById('cards');

fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.days) {
            data.days.forEach(day => {
                const roundedTemp = Math.round(day.tempmax); // Round to nearest integer
                const card = `
                    <div class="card">
                        <div class="date">${day.datetime}</div>
                        <div class="max_temp">Max Temp: ${roundedTemp}°C</div>
                    </div>`;
                cards.innerHTML += card;
            });
        } else {
            cards.innerHTML = '<div class="error">No data available</div>';
        }
    })
    .catch(err => {
        console.error('Error fetching data:', err);
        cards.innerHTML = '<div class="error">Failed to load data</div>';
    });
*/
// JavaScript script to fetch and display weather data dynamically in cards
/*
Szinek:
-9 vagy nagyobb levendula lila HEX: #710fc2
-8 - -5 sötétkék HEX: #2535c4.
-4 - -1 égkék HEX: #4e4ccf.
 0 - 3 türkízkék HEX: #40E0D0.
 4 - 7 sötétzöld HEX: #42c062.
 8 - 11 mohazöld HEX: #40e083.
 12 -15 világoszöld HEX: #90EE90.
 16 - 19 pasztelsárga HEX: #FFFFB3.
 20 - 23 napsárga HEX: #FFD700.
 24 -27 sáfrány HEX: #F4C430.
 28 - 31 korall HEX: #FF7F50.
 32 - 35 gránátalma HEX: #E63946.
 36 -39 piros HEX: #FF0000.
 40 fölött bordó HEX: #800000.
*/
const START_DATE = "2025-01-01";
const today = new Date();
const formattedDate = today.toISOString().slice(0, 10);
const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Debrecen/${START_DATE}/${formattedDate}?unitGroup=metric&include=days&key=KBBNNGHACUND6EXNXQ6JH424F&contentType=json`;


/*fetch('https://api.citatum.hu/idezet.php?f=znyisztor&j=eb132db9ce18b0d7e709fa6094655e21')
  .then(response => response.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    // ... (az előző példában látott módon dolgozzuk fel az xmlDoc-ot)
    const idezetek = xmlDoc.querySelectorAll('idezet')

    idezetek.forEach(idezetek => {
        const idezet_ki = idezetek.querySelector('idezetszoveg').textContent;
        const szerzo_ki = idezetek.querySelector('szerzo').textContent;
        document.getElementById("idezet").innerHTML = idezet_ki;
        document.getElementById("szerzo").innerHTML = szerzo_ki;
        console.log(`Idézet: ${idezet_ki}, Szerző: ${szerzo_ki}`);
    });
  });*/
  

const cards = document.getElementById('cards');


setTimeout(()=>{
    var container = document.getElementById("citatum");
    var idezet_container = document.getElementById("idezet"); 
    //idezet_container.innerHTML = container.innerHTML;
    if(container){console-console.log(container);}
    
    if (container && idezet_container) {
    
        idezet_container.innerHTML = container.innerHTML;
    }
    },1000);

fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.days) {
            data.days.forEach(day => {
                const roundedTemp = Math.round(day.tempmax); // Kerekítés

                // Hőmérsékletnek megfelelő szín beállítása
                let cardColor = '';
                if (roundedTemp <= -9) {
                    cardColor = ' blue'; // -9 vagy nagyobb
                } else if (roundedTemp >= -8 && roundedTemp <= -5) {
                    cardColor = ' #0066CC'; // -8 - -5
                } else if (roundedTemp >= -4 && roundedTemp <= -1) {
                    cardColor = ' #3399FF'; // -4 - -1
                } else if (roundedTemp >= 0 && roundedTemp <= 3) {
                    cardColor = ' #99CCFF'; // 0 - 3
                } else if (roundedTemp >= 4 && roundedTemp <= 7) {
                    cardColor = ' #009933'; // 4 - 7
                } else if (roundedTemp >= 8 && roundedTemp <= 11) {
                    cardColor = ' #66FF66'; // 8 - 11
                } else if (roundedTemp >= 12 && roundedTemp <= 15) {
                    cardColor = ' #CCFFCC'; // 12 - 15 
                } else if (roundedTemp >= 16 && roundedTemp <= 19) {
                    cardColor = ' #FFFFB3'; // 16 - 19
                } else if (roundedTemp >= 20 && roundedTemp <= 23) {
                    cardColor = ' #FFCC33'; // 20 - 23 
                } else if (roundedTemp >= 24 && roundedTemp <= 27) {
                    cardColor = ' #FF9900'; // 24 - 27
                } else if (roundedTemp >= 28 && roundedTemp <= 31) {
                    cardColor = ' #FF6666'; // 28 - 31
                } else if (roundedTemp >= 32 && roundedTemp <= 35) {
                    cardColor = ' #CC0000'; // 32 - 35
                } else if (roundedTemp >= 36 && roundedTemp <= 39) {
                    cardColor = ' #990033'; // 36 - 39
                } else if (roundedTemp >= 40) {
                    cardColor = ' #800000'; // 40+
                } else {
                    cardColor = '#fafafa'; // Hibás adat
                }

                const card = `
                    <div class="card" style="background-color: ${cardColor};">
                        <div class="date">${day.datetime}</div>
                        <div class="max_temp">Max Temp: ${roundedTemp}°C</div>
                    </div>`;
                cards.innerHTML += card;
            });
        } else {
            cards.innerHTML = '<div class="error">Nincs adat!</div>';
        }
    })
    .catch(err => {
        console.error('Error fetching data:', err);
        cards.innerHTML = '<div class="error">Napi lekérés vége!!</div>';
    });
    
    