// search();
// get id from html file
const getId = id => document.getElementById(id);

// give a warning if needed 
const giveWarning = (text) => {
    const warningId = getId('warning');
    warningId.innerText = text;
    /* 
    // closure function
        const warningText = text;
        return {
            forWarning: () => {
                warningId.innerText = text;
            },
            forResult: () => {
                warningId.innerText = text;
            }
        }
         */
}

const searchBtn = () => {
    // clear the warning 
    giveWarning('');

    // get the input text
    const searchText = getId('search-city');
    const city = searchText.value;

    //clear the input
    searchText.value = '';
    if (city === '') {
        giveWarning('Please enter a city name');
        return;
    }
    else {
        search(city);
    }
};

// calculation the search 
const search = (cityName = 'gaibandha') => {

    const cityResult = cityName;

    const API_KEY = `470594a71f8f3dfbdbe8c4032393d7a7`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityResult}&appid=${API_KEY}&units=metric`;

    // fetch the data 
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data));

}
search();

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
// displaying the result 
const displayResult = (data) => {

    const imgCod = data.weather[0].icon;
    const imgUrl = `http://openweathermap.org/img/wn/${imgCod}@2x.png`;
    console.log(imgUrl);
    //city
    const city = getId('city');
    if (data.name === undefined) {
        giveWarning('City Not Found!')
    }
    else {
        setInnerText('city', data.name);
        setInnerText('temparature', data.main.temp);
        setInnerText('condition', data.weather[0].main);

        // icon
        const img = getId('image');
        img.setAttribute('src', imgUrl);

        /* 
                //old style
                city.innerText = data.name;
                //temparature
                const temparature = getId('temparature');
                temparature.innerText = data.main.temp;
        
                // condition 
                const condition = getId('condition');
                condition.innerText = data.weather[0].main;
                 */
    }

}

