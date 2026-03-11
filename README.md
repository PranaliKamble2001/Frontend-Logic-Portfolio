# Frontend Logic Portfolio

A curated collection of high-quality UI components and frontend logic implementations. This repository focuses on **clean code**, **user experience (UX)**, and **modern web standards**.

-----------------------------------------------------------------------------------------------

## 📂 Module 1: Registration Module
* **Purpose:** A modern, responsive user registration form with integrated client-side logic.
* **Location:** `/Registration-Form`
* **Logic Features:**
    * **Real-time Validation:** Checks for valid email formats and password length using Regex.
    * **UX Enhancements:** Interactive password visibility toggle (Show/Hide).
    * **Modular Error Handling:** Uses a central `showError` helper function to maintain DRY code.
    * **State Management:** Resets UI states and error messages dynamically upon each submission attempt.
      
------------------------------------------------------------------------------------------------
## 📂 Module 2: Dynamic Search Filter
* **Purpose:** A high-performance "Instant Finder" demonstrating real-time data manipulation.
* **Location:** `/Dynamic-Search-Filter`
* **Logic Features:**
    * **Array Filtering:** Utilizes JavaScript `.filter()` to match user input against a data set.
    * **Dynamic DOM Updates:** Re-renders the list instantly without a page refresh using `.map()`.
    * **Case-Insensitive Search:** Optimized logic to handle various user typing styles.
      
------------------------------------------------------------------------------------------------
## 📂 Module 3: Dark Mode Toggle
* **Purpose:** A professional theme switcher demonstrating **State Persistence** and **CSS Variable manipulation**.
* **Location:** `/Dark-Mode-Toggle`
* **Logic Features:**
    * **LocalStorage Persistence:** Remembers the user’s theme preference even after a refresh.
    * **CSS Architecture:** Uses `:root` custom properties for site-wide theme updates.
    * **Entrance Animation:** Implements `@keyframes` for professional fade-in effects.
      
------------------------------------------------------------------------------------------------

## 📂 Module 4: Dynamic Weather Engine
* **Purpose:** A simulation-driven weather dashboard focusing on **Data Mapping**, **State Persistence**, and **Advanced CSS Micro-interactions**.
* **Location:** `/Dynamic-Weather-Engine`
* **Logic Features:**
    * **Data Object Simulation:** Mimics a REST API response using a structured local `weatherStore` object with support for multi-word cities (e.g., "New York").
    * **State Management:** Implements a custom "Recent Search" stack using `.unshift()` and `.pop()` to maintain a rolling history of the last 3 entries.
    * **State Reset Logic:** Includes a "Clear All" functionality that wipes the data array and resets the DOM to its initial state.
    * **Dynamic Theming:** High-fidelity UI updates using CSS Linear Gradients that change based on city-specific data.
    * **UX Micro-interactions:** Premium "floating" effects using `box-shadow` and `translateY` transforms to provide tactile user feedback.

------------------------------------------------------------------------------------------------

##  Technical Stack

| Technology | Application |
| :--- | :--- |
| **HTML5** | Semantic structure for accessibility and SEO. |
| **CSS3** | Custom properties (variables), Flexbox, and **Gradients**. |
| **JavaScript** | DOM manipulation, **State Management**, and Event-driven logic. |
| **Data Modeling** | Local JSON-style objects for simulating backend responses. |

------------------------------------------------------------------------------------------------

##  How to Run

1.  **Clone the repository:**
    `git clone https://github.com/PranaliKamble2001/Frontend-Logic-Portfolio.git`
2.  Navigate to any module folder.
3.  Open `index.html` in your browser.

------------------------------------------------------------------------------------------------
