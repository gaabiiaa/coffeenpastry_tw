document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const rating = document.getElementById("rating").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
        alert("Please fill in all fields!");
        return;
    }

    const formData = { name, rating, message };

    // Retrieve existing data from localStorage
    let storedData = JSON.parse(localStorage.getItem("feedback")) || [];

    // Add new feedback to the array
    storedData.push(formData);

    // Save updated data back to localStorage
    localStorage.setItem("feedback", JSON.stringify(storedData));

    // Log updated feedback data to the console
    console.log("Updated Feedback Data:", JSON.parse(localStorage.getItem("feedback")));

    // Show success message
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    // Show the Delete Review button
    const deleteButton = document.getElementById("delete-review");
    deleteButton.style.display = "inline";

    // Reset the form
    document.getElementById("contact-form").reset();
});

// Handle Delete Review Button Click
document.getElementById("delete-review").addEventListener("click", () => {
    let storedData = JSON.parse(localStorage.getItem("feedback")) || [];

    if (storedData.length > 0) {
        storedData.pop(); // Remove the last item
        localStorage.setItem("feedback", JSON.stringify(storedData)); // Update localStorage
        console.log("Updated Feedback Data After Deletion:", storedData);

        // Hide the success message and delete button if no reviews are left
        if (storedData.length === 0) {
            document.getElementById("success-message").style.display = "none";
            document.getElementById("delete-review").style.display = "none";
        }
    } else {
        alert("No reviews to delete!");
    }
});
