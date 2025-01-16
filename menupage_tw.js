function recommendProduct() {
    const now = new Date();
    const hours = now.getHours();
    const recommendationElement = document.getElementById("recommendation");
    let recommendation;

    if (hours >= 5 && hours < 12) {
        recommendation = "☕ Good morning! We recommend an espresso and a freshly baked croissant!";
    } else if (hours >= 12 && hours < 18) {
        recommendation = "🥐 Good afternoon! Have you tried our signature cheesecake or a refreshing iced mocha?";
    } else if (hours >= 18 && hours < 24) {
        recommendation = "🍰 Good evening! Unwind with a classic coffee with a donut on the side.";
    } else {
        recommendation = "🌙 It's late! We suggest a warm tea or a comforting cappucino.";
    }

    recommendationElement.textContent = recommendation;
}
setInterval(recommendProduct, 60000);
window.onload = recommendProduct;
