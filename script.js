// script.js

// Add event listeners to navigation menu items
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll("nav ul li a");
  navItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
      event.preventDefault();
      const targetSection = document.querySelector(`#${event.target.textContent.toLowerCase()}`);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// Add animation to section headers
document.addEventListener("DOMContentLoaded", function() {
  const sectionHeaders = document.querySelectorAll("section h2");
  sectionHeaders.forEach(function(header) {
    header.addEventListener("mouseover", function() {
      header.style.transform = "scale(1.1)";
    });
    header.addEventListener("mouseout", function() {
      header.style.transform = "scale(1)";
    });
  });
});

// Add dynamic content loading
document.addEventListener("DOMContentLoaded", function() {
  const diseaseSections = document.querySelectorAll("section.disease");
  diseaseSections.forEach(function(section) {
    const diseaseName = section.id;
    fetch(`data/${diseaseName}.json`)
      .then(response => response.json())
      .then(data => {
        const diseaseInfo = data[diseaseName];
        section.innerHTML = `
          <h2>${diseaseName}</h2>
          <p>${diseaseInfo.description}</p>
          <ul>
            <li>Transmission: ${diseaseInfo.transmission}</li>
            <li>Symptoms: ${diseaseInfo.symptoms}</li>
            <li>Treatment: ${diseaseInfo.treatment}</li>
          </ul>
        `;
      })
      .catch(error => console.error(error));
  });
});
