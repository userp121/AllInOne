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

// Function to display coins in the sidebar
function displayCoins() {
    const coinList = document.getElementById('coin-list');
    coins.forEach(coin => {
        const li = document.createElement('li');
        
        // Create an image element for the coin icon
        const img = document.createElement('img');
        img.src = `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`; // Use the coin ID for the image URL
        img.alt = `${coin.name} icon`;
        img.style.width = '20px'; // Set the width of the icon
        img.style.marginRight = '8px'; // Add some space between the icon and text

        li.appendChild(img); // Append the image to the list item
        li.appendChild(document.createTextNode(`${coin.name} (${coin.symbol}) - $${coin.price.toFixed(2)}`)); // Display name, symbol, and price
        li.onclick = () => updateChart(coin.symbol);
        coinList.appendChild(li);
    });

    // Set the default chart to Bitcoin when the page loads
    updateChart(coins[0].symbol); // Bitcoin is the first coin in the array
}

// Function to update the chart based on the selected coin
function updateChart(symbol) {
    // Clear the existing chart
    document.getElementById('tradingview_chart').innerHTML = '';

    // Create a new TradingView widget for the selected coin
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

// Initialize the coin list and default chart on page load
window.onload = displayCoins; // Ensure the function runs when the page loads