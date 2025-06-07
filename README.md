# Eventify React

Eventify is a modern, full-featured event management and discovery web application built with React, TailwindCSS, and PrimeReact. The project is designed for both end-users and admins to create, explore, and manage events with a beautiful, responsive, and interactive UI.

## Features
- **Authentication:** Sign up, login, forget/reset password, and protected routes using React Context.
- **Profile Management:** Update profile info, upload avatar (with image validation), and delete account with confirmation dialogs.
- **Event Management:** Create, explore, and search for events. Event cards, categories, and filtering are modular and reusable.
- **Search Experience:** Persistent search state between pages, with query string support and real-time search bar updates.
- **Chat Widget:** Online support chat with WebSocket integration, always available except on auth/landing pages.
- **Admin Shortcut:** Login as admin with `admin@gmail.com` / `admin` for quick access to HomePage.
- **UI/UX:** Modern, animated transitions (fade-in, slide-up), custom theming, and accessibility best practices.
- **Component Structure:** Highly modular, with separate folders for forms, inputs, page components, and context.
- **Responsive Design:** Mobile-friendly layouts using TailwindCSS utility classes.
- **PrimeReact Integration:** Consistent, accessible UI elements (inputs, buttons, dialogs, etc.)

## Tech Stack
- **React** (with hooks and functional components)
- **TailwindCSS** (utility-first CSS framework)
- **PrimeReact** & **PrimeIcons** (UI components)
- **React Router DOM** (routing)

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/aminxkamali/eventify.git
   cd eventify-react
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
src/
  components/         # Reusable and page-specific components
    homePageComponents/   # Home page widgets (header, footer, event lists, etc.)
    explorePageComponents/# Explore page widgets (search, categories, event cards, etc.)
    ...
  Forms/              # All form components (SignUp, Login, Profile, ChangePassword, etc.)
  pages/              # Page-level components (Home, Explore, Profile, etc.)
  inputs/             # Input field components (PasswordField, TextField, etc.)
  icons/              # Static image assets (logos, icons)
  context/            # React context (Auth, etc.)
  index.js, App.js    # Entry and root components
  index.css           # Global styles (TailwindCSS, custom animations)
  custom-primereact-overrides.css # Custom PrimeReact style overrides
```

## Key Files & Folders
- `src/components/ChatWidget.js`: Floating chat widget with WebSocket support.
- `src/Forms/SignUpForm.js`, `LoginForm.js`, `profileForm.js`: Modular, animated forms with validation and feedback.
- `src/pages/ChangePasswordWithEmailPage.js`, `ChangePasswordCurrentPage.js`: Password reset flows with animation and validation.
- `src/components/homePageComponents/DiscoverEventsHeader.js`: Search bar with navigation and persistent state.
- `src/components/explorePageComponents/ExploreSearch.js`: Search input synced with query string for seamless UX.
- `src/context/AuthContext.js`: Authentication logic and context provider.
- `src/index.css`: TailwindCSS base, custom animations (e.g., `animate-fade-in-up`).

## Customization
- **WebSocket Endpoint:** Edit `src/components/ChatWidget.js` to set your chat server endpoint.
- **Theme & Animations:** Update `tailwind.config.js` and `index.css` for custom colors, fonts, and animations.
- **Admin Access:** Use `admin@gmail.com` / `admin` for quick admin login (see `LoginForm.js`).
- **Routing:** All routes are managed in `App.js` using React Router DOM.

## Deployment
You can deploy this app to Vercel, Netlify, or any static hosting that supports React. To build for production:
```bash
npm run build
```

## Repository
This project is hosted on GitHub: [https://github.com/aminxkamali/eventify.git](https://github.com/aminxkamali/eventify.git)

## License
This project is for educational/demo purposes. For production use, please review and update security/authentication logic, API endpoints, and environment variables.

---

Feel free to fork, contribute, and customize for your needs!
