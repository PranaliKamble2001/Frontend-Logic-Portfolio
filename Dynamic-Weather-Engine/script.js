const weatherStore = {
    mumbai: { temp: 32, cond: "Sunny", color: "linear-gradient(135deg, #FF8C00, #FFD700)" },
    london: { temp: 15, cond: "Rainy", color: "linear-gradient(135deg, #606c88, #3f4c6b)" },
    tokyo: { temp: 22, cond: "Cloudy", color: "linear-gradient(135deg, #bdc3c7, #2c3e50)" },
    dubai: { temp: 40, cond: "Hot", color: "linear-gradient(135deg, #f12711, #f5af19)" },
    paris: { temp: 18, cond: "Breezy", color: "linear-gradient(135deg, #eecda3, #ef629f)" },
    "new york": { temp: 12, cond: "Chilly", color: "linear-gradient(135deg, #2980b9, #2c3e50)" },
    sydney: { temp: 26, cond: "Clear", color: "linear-gradient(135deg, #2193b0, #6dd5ed)" }
};

let historyLog = [];

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const clearBtn = document.getElementById('clearBtn');

function updateUI(city, data) {
    document.getElementById('cityName').innerText = city.toUpperCase();
    document.getElementById('temp').innerText = data.temp + "°C";
    document.getElementById('desc').innerText = "Condition: " + data.cond;
    document.body.style.background = data.color;
}

function renderHistory() {
    const container = document.getElementById('historyList');
    container.innerHTML = "";
    
    historyLog.forEach(item => {
        const span = document.createElement('span');
        span.classList.add('history-item');
        span.innerText = item.charAt(0).toUpperCase() + item.slice(1);
        span.onclick = () => updateUI(item, weatherStore[item]);
        container.appendChild(span);
    });
}

function addToHistory(city) {
    if (!historyLog.includes(city)) {
        historyLog.unshift(city);
        if (historyLog.length > 3) historyLog.pop();
        renderHistory();
    }
}

function processSearch() {
    const city = cityInput.value.toLowerCase().trim();
    const data = weatherStore[city];

    if (data) {
        updateUI(city, data);
        addToHistory(city);
    } else {
        alert("City not found! Try Mumbai, London, Tokyo, Dubai, Paris, New York, or Sydney.");
    }
    cityInput.value = "";
}

searchBtn.addEventListener('click', processSearch);
cityInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') processSearch(); });

clearBtn.addEventListener('click', () => {
    historyLog = [];
    renderHistory();
    document.body.style.background = "#121212";
    document.getElementById('cityName').innerText = "Weather Engine";
    document.getElementById('temp').innerText = "--°C";
    document.getElementById('desc').innerText = "Enter a city to begin";
});
