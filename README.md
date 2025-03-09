# ML Engineer Portfolio

A modern, responsive portfolio website showcasing ML engineering and data science expertise.


## Live Demo

[View the live site](https://your-portfolio-url.com)

## Features

- **Modern Design**: Sleek, professional interface with a teal-on-dark color scheme
- **Responsive Layout**: Optimized for all device sizes from mobile to desktop
- **Dynamic Content**: All content is loaded from JSON data files for easy updates
- **Interactive Elements**: Includes typing animation, hover effects, and smooth scrolling
- **Skill Visualization**: Visual representation of technical skills by category
- **Project Showcase**: Filterable projects section with key features and technologies
- **Contact Form**: Functional contact form integrated with EmailJS
- **Optimized Performance**: Fast loading times and smooth animations

## Tech Stack

- **React**: Frontend library for building the UI
- **Tailwind CSS**: Utility-first CSS framework for styling
- **EmailJS**: Email sending functionality without a backend
- **JSON**: Data storage for easy content management

## Installation and Setup

### Prerequisites
- Node.js (v14.0.0 or later)
- npm or yarn

### Installation Steps

1. Clone the repository
```bash
git clone git@github.com:SUMITDHAKAD0/my_portfolio.git
cd ml-engineer-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

### Contact Form
The contact form uses EmailJS to send messages without a backend server.

To configure EmailJS:
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service and template
3. Update the EmailJS configuration in `src/components/Contact.js`

