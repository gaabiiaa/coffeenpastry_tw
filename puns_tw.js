document.addEventListener("DOMContentLoaded", () => {
    const leftMessages = document.getElementById("left-messages");
    const rightMessages = document.getElementById("right-messages");

    fetch("puns_tw.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load messages");
            }
            return response.json(); // parse json
        })
        .then((data) => {
            // distribute messages between the sides
            data.forEach((item, index) => {
                //  new div for each message
                const messageDiv = document.createElement("div");

                // get the message from pusn_tw.json
                messageDiv.textContent = item.message;

                if (index % 2 === 0) {
                    leftMessages.appendChild(messageDiv);
                } else {
                    rightMessages.appendChild(messageDiv);
                }
            });
        })
        .catch((error) => {
            console.error("Error fetching messages:", error);
        });
});
