// get id from html file 
const getId = id => document.getElementById(id);

// give a warning if needed 
const giveWarning = (text) => {
    const warningId = getId('warning');
    warningId.innerText = text;
}

// calculation the search 
const search = () => {
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

    const API_KEY = `470594a71f8f3dfbdbe8c4032393d7a7`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    // fetch the data 
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data));

}

// displaying the result 
const displayResult = (data) => {
    //kothat show krbo
    console.log(data);
}

