const coins = [
    { id: "1", name: "Bitcoin", symbol: "BTC", price: 50000.00 },
    { id: "1027", name: "Ethereum", symbol: "ETH", price: 4000.00 },
    { id: "52", name: "Ripple", symbol: "XRP", price: 1.00 },
    { id: "2", name: "Litecoin", symbol: "LTC", price: 200.00 },
    { id: "2010", name: "Cardano", symbol: "ADA", price: 2.50 },
    { id: "12162", name: "Polkadot", symbol: "DOT", price: 30.00 },
    { id: "1975", name: "Chainlink", symbol: "LINK", price: 25.00 },
    { id: "1831", name: "Bitcoin Cash", symbol: "BCH", price: 600.00 },
    { id: "512", name: "Stellar", symbol: "XLM", price: 0.30 },
    { id: "74", name: "Dogecoin", symbol: "DOGE", price: 0.20 }
];

function displayCoins() {
    const coinList = document.getElementById('coin-list');
    coins.forEach(coin => {
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`; 
        img.alt = `${coin.name} icon`;
        img.style.width = '20px'; 
        img.style.marginRight = '8px'; 

        li.appendChild(img); 
        li.appendChild(document.createTextNode(`${coin.name} (${coin.symbol}) - $${coin.price.toFixed(2)}`)); // Display name, symbol, and price
        li.onclick = () => updateChart(coin.symbol);
        coinList.appendChild(li);
    });

    updateChart(coins[0].symbol); 
}

function updateChart(symbol) {
    document.getElementById('tradingview_chart').innerHTML = '';

    new TradingView.widget({
        "container_id": "tradingview_chart",
        "symbol": symbol,
        "interval": "H",
        "timezone": "Europe/London",
        "theme": "Dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
    });
}

window.onload = displayCoins;