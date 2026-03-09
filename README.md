# Frontend Logic Portfolio

A curated collection of high-quality UI components and frontend logic implementations. This repository focuses on **clean code**, **user experience (UX)**, and **modern web standards**.

---------------------------------------------------------------------------------------------

### 📂 Module 1: Registration Module
**Purpose:** A modern, responsive user registration form with integrated client-side logic.
* **Location:** `/Registration-Form`
* **Logic Features:**
    * **Real-time Validation:** Checks for valid email formats and password length using Regex.
    * **UX Enhancements:** Interactive password visibility toggle (Show/Hide).
    * **Modular Error Handling:** Uses a central `showError` helper function to maintain DRY code.
    * **State Management:** Resets UI states and error messages dynamically upon each submission attempt.

---------------------------------------------------------------------------------------------

### 📂 Module 2: Dynamic Search Filter
**Purpose:** A high-performance "Instant Finder" demonstrating real-time data manipulation.
* **Location:** `/Dynamic-Search-Filter`
* **Logic Features:**
    * **Array Filtering:** Utilizes JavaScript `.filter()` to match user input against a data set.
    * **Dynamic DOM Updates:** Re-renders the list instantly without a page refresh using `.map()`.
    * **Case-Insensitive Search:** Optimized logic to handle various user typing styles.
    * **Responsive UI:** Clean, card-based layout designed with CSS Flexbox.

---------------------------------------------------------------------------------------------

### 📂 Module 3: Dark Mode Toggle
**Purpose:** A professional theme switcher demonstrating **State Persistence** and **CSS Variable manipulation**.
* **Location:** `/Dark-Mode-Toggle`
* **Logic Features:**
    * **LocalStorage Persistence:** Remembers the user’s theme preference (Light/Dark) even after a page refresh.
    * **CSS Architecture:** Uses `:root` custom properties for instant, site-wide theme updates.
    * **Entrance Animation:** Implements `@keyframes` for a smooth, professional fade-in effect on page load.
    * **State-Aware UI:** Dynamically updates button text and status labels based on the active theme.

------------------------------------------------------------------------------------------------

###  Technical Stack

| Technology | Application |
| :--- | :--- |
| **HTML5** | Semantic structure for accessibility and SEO. |
| **CSS3** | Custom properties (variables), Flexbox, and **Keyframe Animations**. |
| **JavaScript** | DOM manipulation, **LocalStorage API**, event-driven logic, and array methods. |

---

### 📥 How to Run
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/PranaliKamble2001/Frontend-Logic-Portfolio.git](https://github.com/PranaliKamble2001/Frontend-Logic-Portfolio.git)
