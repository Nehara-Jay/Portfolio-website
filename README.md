# Modern React Portfolio Template 🚀

A sleek, modern, fully responsive open-source portfolio template built with React, Bootstrap, and Animate.css. Designed with a clean space-themed aesthetic, dynamic glowing text, and completely decoupled data management.

## ✨ Features

*   **Zero-Code Customization:** All personal information, links, skills, and projects are controlled entirely through a single `portfolioData.json` file.
*   **Dynamic Project Tabs:** Easily categorize and filter your work across different tabs.
*   **Integrated Contact Form:** Built-in EmailJS support for direct message delivery.
*   **Downloadable CV & Social Links:** Quick-access navbar buttons for your resume and social profiles.
*   **Custom Tech Tags:** Automatically color-coded pill tags for tech stacks (React, Node.js, Python, MongoDB, etc.).

---

## 🛠️ Quick Start Guide (How to Use This Template)

### 1. Clone or Fork the Repository

Click the **Fork** button at the top right of this repository to copy it to your own GitHub account, then clone it locally:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd react-portfolio
```

### 2. Install Dependencies

Run the following command in your terminal to install all required packages:

```bash
npm install
```

### 3. Add Your Personal Content

Open the `src/data/portfolioData.json` file and update the fields with your own details:

*   **personalInfo:** Update your name, roles, bio description, profile picture path, logo path, and resume link.
*   **skills:** Add your core technical proficiencies.
*   **socialLinks:** Add your LinkedIn, GitHub, and Instagram profile URLs.
*   **projects:** Add your project titles, descriptions, live demo links, GitHub repositories, and tech stack tags.

### 4. Manage Your Assets

*   Drop your profile picture, custom logo, and project screenshots into the `public/images/` folder.
*   Drop your resume PDF directly into the root of the `public/` folder and name it `resume.pdf`.

### 5. Set Up EmailJS (For the Contact Form)

1.  Create a free account on [EmailJS](https://www.emailjs.com/).
2.  Create a `.env` file in the root directory of the project.
3.  Add your EmailJS keys like this:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6. Run Locally

Start the local development server to preview your portfolio:

```bash
npm start
```

---

## 📂 Project Structure

```
react-portfolio/
├── public/              # Static assets (Images, Logo, Resume PDF)
├── src/
│   ├── assets/          # Template design elements & icons
│   ├── components/      # React components (Banner, Projects, Skills, etc.)
│   ├── data/            # portfolioData.json (All customizable content)
│   ├── App.js
│   └── App.css
├── .env                 # Private API keys (Git-ignored)
└── package.json
```

---

## 📄 License

This project is open source and available under the MIT License. Feel free to fork it, customize it, and use it for your own professional portfolio!
