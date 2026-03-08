// Data: A professional list of skills/topics
const items = [
    "Java Core", "JavaScript ES6", "Spring Boot", "Hibernate", "HTML","Python",
    "React.js", "MySQL Database", "Git Version Control", "SQL", "PHP",
    "Data Structures", "REST APIs", "CSS Flexbox"
];

const searchInput = document.querySelector('#search');
const list = document.querySelector('#item-list');

// Logic: Filter and Display Items
function displayItems(filteredItems) {
    list.innerHTML = filteredItems
        .map(item => `<li>${item}</li>`)
        .join('');
}

// Logic: Listen for typing and filter the array
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    
    // Core Logic: Filtering the original array based on user input
    const filtered = items.filter(item => 
        item.toLowerCase().includes(term)
    );
    
    displayItems(filtered);
});

// Initialize the list
displayItems(items);
