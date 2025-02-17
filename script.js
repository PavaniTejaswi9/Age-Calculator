// script.js

function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        document.getElementById("result").innerText = "Please select a birthdate.";
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerText = `You are ${age} years old.`;
}
