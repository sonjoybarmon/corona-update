const worldCases = document.getElementById('world_cases');
const worldDeath = document.getElementById('world_death');
const worldRecover = document.getElementById('worldRecover');
const bdCases = document.getElementById('bd_cases');
const bdDeath = document.getElementById('bd_death');
const bdRecover = document.getElementById('bdRecover');
const bdNewCases = document.getElementById('bd_new_cases');


    fetch('https://api.covid19api.com/summary')
    .then(response=>response.json())
    .then(data=>displayData(data))
    // .then(json=>console.log(json))

    function displayData(update){
        const newWorldCases =`${update.Global.TotalConfirmed}`;
        const newWorldDeath =`${update.Global.TotalDeaths}`;
        const newWorldRecover =`${update.Global.TotalRecovered}`;
        const newUpdateCases = `${update.Countries[13].NewConfirmed}`;
        const newBdCases =`${update.Countries[13].TotalConfirmed}`;
        const newBdDeath =`${update.Countries[13].TotalDeaths}`;
        const newBdRecover =`${update.Countries[13].TotalRecovered}`;
        worldCases.innerHTML = newWorldCases;
        worldDeath.innerHTML = newWorldDeath ;
        worldRecover.innerHTML = newWorldRecover;
        bdNewCases.innerHTML = newUpdateCases;
        bdCases.innerHTML = newBdCases;
        bdDeath.innerHTML = newBdDeath
        bdRecover.innerHTML = newBdRecover;
    }


    let now = new Date();
        let date = document.getElementById('date');
            date.innerHTML = dateBuilder(now);
    // working to set time 
    function dateBuilder(time) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = days[time.getDay()];
        let date = time.getDate();
        let month = months[time.getMonth()];
        let year = time.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }