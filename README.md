# Invoicer

<div align="center">

![Invoicer Logo](/public/logo.png)

# Invoicer - Modern Invoice Management System

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.16.0-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-5.0.0_beta.28-purple?style=for-the-badge&logo=auth0)](https://next-auth.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Author](https://img.shields.io/badge/Author-Saksham_Goel-red.svg?style=for-the-badge)](https://github.com/Saksham-Goel1107)

</div>

## 📋 Overview

Invoicer is a comprehensive, modern invoice management system built with Next.js and TypeScript. It allows businesses to easily create, manage, and send professional invoices to clients. With a clean, intuitive interface and powerful features, Invoicer streamlines the entire invoicing workflow from creation to payment tracking.

![Dashboard Preview](/public/dashboard.png)

## ✨ Features

- 📝 **Easy Invoice Creation** - Create professional invoices with a user-friendly interface
- 🔔 **Email Notifications** - Automatically send invoice emails to clients
- 📊 **Dashboard Analytics** - Track invoice status, payments, and business performance
- 💰 **Multiple Currency Support** - Create invoices in various currencies
- 🔒 **Secure Authentication** - Email-based authentication system using NextAuth.js
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🖨️ **PDF Generation** - Generate and download invoices as PDF documents
- 🔄 **Real-time Updates** - See changes reflect instantly with Next.js App Router

## 🛠️ Technologies

- **Frontend**: Next.js 15, React 19, TailwindCSS, shadcn/ui
- **Backend**: Next.js API Routes, MongoDB
- **Authentication**: NextAuth.js with email provider
- **Email Service**: Resend
- **Data Visualization**: Recharts
- **PDF Generation**: jsPDF
- **Form Handling**: React Hook Form with Zod validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- MongoDB database
- Resend account for email services

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Saksham-Goel1107/Invoicer.git
cd Invoicer
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```
# MongoDB connection string
MONGODB_URI=mongodb://your-mongodb-connection-string

# NextAuth configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key

# Resend API key
AUTH_RESEND_KEY=your-resend-api-key

# Application domain for generating URLs
DOMAIN=http://localhost:3000

# Node environment
NODE_ENV=development
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📱 Application Structure

- **/src/app**: Next.js App Router structure
  - **/api**: API routes for CRUD operations
  - **/dashboard**: User dashboard and invoice management
  - **/auth**: Authentication pages
- **/src/components**: Reusable React components
- **/src/lib**: Utility functions and configuration
- **/src/models**: MongoDB data models
- **/public**: Static assets

## 📊 Database Schema

The application uses MongoDB with the following main collections:

- **Users**: User profiles and authentication data
- **Invoices**: Invoice data including items, totals, and status
- **Settings**: User preferences and business settings

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Saksham Goel** - [GitHub](https://github.com/Saksham-Goel1107)

---

<div align="center">
  <p>Made with ❤️ by Saksham Goel</p>
</div>
