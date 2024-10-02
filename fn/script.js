document.addEventListener("DOMContentLoaded", function() {
    // Fetch player count from Fortnite link
    fetch('https://www.fortnite.com/@pandvil/2229-0002-0277?lang=en-US')
        .then(response => response.text())
        .then(htmlString => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, 'text/html');
            const playerCountElement = doc.querySelector('[data-testid="ccu"] span');
            const playerCount = playerCountElement ? playerCountElement.textContent : 'N/A';

            document.getElementById('playerCount').textContent = playerCount;
        })
        .catch(error => {
            console.error('Error fetching player count:', error);
            document.getElementById('playerCount').textContent = 'Unable to fetch data';
        });
});
