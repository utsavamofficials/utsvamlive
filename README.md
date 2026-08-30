# Utsavam

### Digital Event, Donation & Expense Management Platform

Utsavam is a modern web application designed to simplify the management of events, donations, expenses, organizers, and financial reporting through a centralized digital platform.

The platform provides dedicated experiences for administrators, event managers, and users, helping organizations manage their event operations efficiently while maintaining transparency and accessibility.

---

## ✨ Overview

Utsavam brings event management and financial operations together in a single platform.

It enables organizations to:

* Create and manage events
* Register and manage event organizers
* Record and track donations
* Generate donation receipts
* Manage expenses and expense categories
* Monitor event-wise financial activity
* Generate revenue and financial reports
* Use QR codes for donation and event-related workflows
* Provide role-based access to different users
* Manage event and organizer information from dedicated dashboards

The application is designed with a responsive interface and a focus on usability, transparency, and efficient digital workflows.

---

## 🚀 Key Features

### 🔐 Authentication & Authorization

* Secure user authentication
* Role-based access control
* Protected routes
* Dedicated interfaces for different user roles
* User profile management

### 🎪 Event Management

* Create and manage events
* Configure event details and schedules
* Manage event organizers
* View event information
* Track event-related activities
* Event registration workflows

### 💰 Donation Management

* Record donations digitally
* Manage donor information
* Generate donation receipts
* Track donations by event
* Donation history and reporting
* QR-based donation workflows
* Donation data export and reporting capabilities

### 📊 Financial Reporting

* Event-wise revenue tracking
* Donation summaries
* Expense tracking
* Revenue reports
* Financial overview dashboards
* Printable reports
* Exportable data

### 💳 Expense Management

* Record event expenses
* Organize expenses by category
* Track expense amounts
* Manage expense information
* Support financial accountability and reporting

### 📱 QR Code Integration

Utsavam makes use of QR-code technology for convenient digital workflows, including:

* Donation-related QR codes
* Event information
* Payment workflows
* Receipt and verification workflows

### 🤖 Interactive Features

The application also includes interactive user experiences such as:

* In-app chatbot interfaces
* Guided user workflows
* Dynamic notifications
* Confirmation dialogs
* Animated UI components
* Responsive dashboards

---

## 🛠️ Technology Stack

### Frontend

| Technology      | Purpose                       |
| --------------- | ----------------------------- |
| React           | User interface                |
| React DOM       | React rendering               |
| React Router    | Application routing           |
| Vite            | Development and build tooling |
| React Bootstrap | UI components                 |
| Bootstrap       | Responsive styling            |
| Bootstrap Icons | Interface icons               |
| Lucide React    | Modern icon system            |

### Data & Communication

| Technology | Purpose                                |
| ---------- | -------------------------------------- |
| Axios      | HTTP/API communication                 |
| XLSX       | Spreadsheet export and data processing |
| CryptoJS   | Client-side cryptographic utilities    |

### QR & Media

| Technology        | Purpose                              |
| ----------------- | ------------------------------------ |
| QR Code Styling   | Custom QR-code generation            |
| QRCode React      | QR-code rendering                    |
| React QRCode Logo | Branded QR-code generation           |
| html2canvas       | Client-side document/image rendering |

### UI & Animation

| Technology      | Purpose                          |
| --------------- | -------------------------------- |
| AOS             | Scroll-based animations          |
| Bootstrap       | Responsive UI                    |
| React Bootstrap | React-based Bootstrap components |

### Development

| Technology | Purpose                                  |
| ---------- | ---------------------------------------- |
| ESLint     | Code quality and linting                 |
| Vite       | Development server and production builds |
| Vite PWA   | Progressive Web App capabilities         |

The current project uses React 19, Vite 7, React Router 7, Bootstrap 5, Axios, QR-code libraries, XLSX, and other supporting packages.

---

## 📋 Prerequisites

Before running the project locally, make sure you have:

* **Node.js** 18+ recommended
* **npm** 9+ recommended
* Access to the Utsavam backend/API

You can verify your installation with:

```bash
node --version
npm --version
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/utsavamofficials/utsvamlive.git
```

Navigate to the project:

```bash
cd utsvamlive
```

Install dependencies:

```bash
npm install
```

---

## 🔧 Configuration

The frontend communicates with the Utsavam backend through a configurable API endpoint.

The current production configuration points to:

```text
https://apiutsavm.vercel.app
```

The API base URL is configured within the application's configuration layer.

For local development, update the API configuration to point to your local or development backend.

> **Important:** Do not commit private API keys, credentials, tokens, or other sensitive configuration values to the repository.

For production deployments, environment variables are recommended for sensitive or environment-specific configuration.

---

## ▶️ Running the Application

### Development

Start the Vite development server:

```bash
npm run dev
```

The application will be available through the local development URL provided by Vite.

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Lint

Run ESLint:

```bash
npm run lint
```

---

## 📦 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build the application for production |
| `npm run preview` | Preview the production build         |
| `npm run lint`    | Run ESLint checks                    |

These commands are defined in the project's `package.json`.

---

## 🌐 Deployment

The application is built using Vite and can be deployed to modern static hosting platforms.

Supported deployment platforms include:

* Vercel
* Netlify
* Cloudflare Pages
* GitHub Pages
* Any static hosting/CDN platform capable of serving a Vite production build

Build the application with:

```bash
npm run build
```

The generated production assets can then be deployed using your preferred hosting provider.

The repository currently includes Vercel configuration, indicating support for Vercel-based deployment.

---

## 🔒 Security

Security is an important part of the Utsavam platform.

The application includes:

* Protected application routes
* Role-based access
* Authentication handling
* API-based communication
* Client-side validation and controlled workflows

### Security Recommendations

When deploying or developing the application:

1. Never commit secrets or API credentials.
2. Use environment variables for environment-specific configuration.
3. Keep authentication tokens secure.
4. Always use HTTPS in production.
5. Validate and authorize sensitive operations on the backend.
6. Keep project dependencies regularly updated.
7. Avoid exposing internal backend credentials in frontend code.

---

## 🧩 Architecture

Utsavam follows a modern frontend architecture centered around:

```text
React Application
       │
       ├── Authentication & Authorization
       │
       ├── Event Management
       │
       ├── Donation Management
       │
       ├── Expense Management
       │
       ├── Reporting & Analytics
       │
       ├── QR Code Workflows
       │
       └── Backend API
```

The frontend communicates with backend services through HTTP APIs, with Axios handling API requests.

---

## 👥 User Roles

The application supports different experiences based on user responsibilities.

### Administrator

Administrators can manage and monitor the overall platform, including:

* Events
* Event managers
* Reports
* Platform-level information
* User and organizational workflows

### Event Manager

Event managers can work with:

* Event information
* Donations
* Donor records
* Revenue reports
* Donation receipts
* Event-specific operations

### User

Regular users can interact with the public-facing platform, discover events, register where applicable, and participate in supported donation workflows.

---

## 📈 Project Goals

Utsavam aims to provide a reliable digital platform that makes event and financial management:

* **Simple** — reduce manual administrative work
* **Transparent** — maintain clear donation and expense records
* **Accessible** — provide an intuitive web experience
* **Scalable** — support growing numbers of events and users
* **Efficient** — centralize operational and financial workflows
* **Digital-first** — replace fragmented manual processes with structured workflows

---

## 🖥️ User Experience

The application provides responsive interfaces designed for different workflows, including:

* Public website
* Authentication pages
* User dashboards
* Administrator dashboards
* Event manager dashboards
* Event registration
* Donation forms
* Donation receipts
* Revenue reports
* QR-code screens
* Financial management interfaces

---

## 🤝 Contributing

Contributions are welcome.

If you would like to contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Run linting and verify the application.

```bash
npm run lint
npm run build
```

5. Commit your changes.

```bash
git commit -m "feat: add your feature"
```

6. Push the branch.

```bash
git push origin feature/your-feature
```

7. Open a Pull Request.

Please keep contributions focused, maintainable, and consistent with the existing application architecture.

---

## 🐛 Issues & Feature Requests

If you find a bug or have an idea for improving Utsavam, please open an issue in the repository.

When reporting a bug, include:

* A clear description of the issue
* Steps to reproduce it
* Expected behavior
* Actual behavior
* Relevant screenshots or logs
* Browser/environment information when applicable

---

## 📄 License

This project is currently maintained by the Utsavam team.

License and usage terms should be defined here when the project is formally released under a specific license.

---

## 🌟 Utsavam

**Digitalizing events. Simplifying donations. Enabling transparency.**

Utsavam brings event management, donations, expenses, and reporting together into one modern digital platform.

---

### Repository

[Utsavam — GitHub Repository](https://github.com/utsavamofficials/utsvamlive?utm_source=chatgpt.com)
