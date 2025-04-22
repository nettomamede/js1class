function submitFeedback() {
    // Fetch latest values
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const userExperience = document.getElementById('userExperience').value; // New field

    // Update UI with user data
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    
    // Display User Experience
    const userExperienceElement = document.createElement("p");
    userExperienceElement.innerHTML = `<strong>Experience:</strong> ${userExperience}`;
    document.getElementById('userInfo').appendChild(userExperienceElement);

    // Show the user info section
    document.getElementById('userInfo').style.display = 'block';

    // Show feedback confirmation
    alert('Thank you for sharing your feedback and experience!');
}

// Event Listeners
document.getElementById('submitBtn').onclick = submitFeedback;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});