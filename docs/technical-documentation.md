# Technical Documentation

## 1. Project Overview

This project is a responsive personal portfolio website built using HTML, CSS, and JavaScript.  
It demonstrates clean UI design, responsive layout, and basic front-end interactivity.

The website includes three main sections:
- About
- Projects
- Contact

---

## 2. Technologies Used

- HTML5 → Page structure
- CSS3 → Styling and layout
- JavaScript (Vanilla JS) → Interactivity
- CSS Variables → Theme management (Light/Dark mode)
- Git & GitHub → Version control

No external frameworks were used.

---

## 3. Design & Layout

The website follows a card-based, professional design style.

Key design features:
- Centered container layout
- Reusable `.card` component
- Consistent spacing and rounded corners
- Brand color system using CSS variables

Responsive design is implemented using:
- CSS Grid (projects and form layout)
- Flexbox (navigation and hero section)
- Media queries for mobile adaptation

---

## 4. Features

### Automatic Footer Year
JavaScript dynamically inserts the current year in the footer.

### Theme Toggle
A dark/light mode toggle is implemented using:
- `data-theme` attribute on the `<html>` element
- CSS variables to switch color values

### Contact Form
- Prevents default submission
- Validates empty fields
- Displays success/error message
- Resets form after submission

---

## 5. Responsiveness

- Two-column layout on desktop
- Single-column layout on smaller screens
- Optimized spacing for mobile devices

---

## 6. Conclusion

This project demonstrates foundational front-end development skills including structured HTML, modern CSS styling, responsive design, and JavaScript DOM manipulation.
