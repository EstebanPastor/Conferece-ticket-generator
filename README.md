Ticket Generator App 🎟️

A dynamic web application built with React, TypeScript, and Tailwind CSS v4 that generates personalized conference tickets based on user input. It features image uploading, form validation, state management, and a responsive custom design.

🚀 Features

Personalized Ticket Generation: Dynamically renders user information onto a styled conference ticket.

Form Validation: Built-in client-side validation for required fields, email formatting, and inputs using react-hook-form.

Global State Management: Fast, lightweight state handling powered by zustand.

Responsive & Modern UI: Styled using Tailwind CSS v4 and custom asset integration.

Unique Ticket ID: Auto-generates a unique random ticket number for every submission.

🛠️ Tech Stack & Dependencies

Core Technologies

React 19: UI Library

TypeScript: Type safety and DX

Vite: Fast development server and bundler

Bun: Package manager and JavaScript runtime

Dependencies

react-hook-form: Declarative, efficient form validation and state handling.

zustand: Lightweight global state management for storing user data across screens.

tailwindcss & @tailwindcss/vite: Utility-first CSS framework (v4 release integration).

📦 Getting Started

Prerequisites

Make sure you have Bun (or Node.js) installed on your system.

1. Clone the repository

git clone https://github.com/your-username/ticket-manager.git
cd ticket-manager

2. Install dependencies

Using Bun:

bun install

(Or npm install / pnpm install / yarn depending on your preferred package manager)

3. Run the development server

bun run dev

Open http://localhost:5173 in your browser to view the application.

📜 Available Scripts

In the project directory, you can run:

bun run dev - Starts the Vite local development server.

bun run build - Compiles and builds the production-ready bundle into the dist/ folder.

bun run lint - Runs ESLint to check for code formatting and code quality issues.

bun run preview - Locally previews the production build.

🚀 Deployment (Production)

To deploy this application to production platforms like Vercel, Netlify, or GitHub Pages:

Option 1: Vercel (Recommended)

Push your code to a GitHub repository.

Go to Vercel and import your project repository.

Vercel will automatically detect Vite and configure the build settings:

Build Command: bun run build (or npm run build)

Output Directory: dist

Click Deploy.

Option 2: Manual Static Build

Build the production bundle:

bun run build

The static production files will be generated in the dist/ directory. You can host these files on any web server (e.g., Nginx, Apache, AWS S3, Cloudflare Pages).

📄 License

This project is open-source and available under the MIT License.
