# Fake Agency Server-Side Rendered (SSR) Node.js App

A stunning, highly modern Node.js application using Express and EJS for Server-Side Rendering (SSR). This application uses a vibrant, dark-mode glassmorphism design with `Outfit` typography and smooth animations to provide a premium user experience.

## Features

- **Modern UI**: Deep dark aesthetic with dynamic glassmorphism and beautiful mesh gradients.
- **Server-Side Rendered (SSR)**: Built entirely using EJS templating. Views are rendered server-side.
- **Node.js Express Backend**: Simple, fast, and lightweight MVC-style architecture.
- **API Ready**: Provides endpoints for fetching services or authenticating forms.

## Quick Start (Local Development)

### 1. Install dependencies

```bash
npm install
```

*(Dependencies include latest `express`, `ejs`, and `dotenv`)*

### 2. Set up environment variables

Copy `.env.example` to a `.env` file and set the required variables:

```bash
cp .env.example .env
```
Ensure you set your server port or password logic inside `.env`.

### 3. Run the application

```bash
npm start
```

Or for development:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application running.

## Deployment with OpenClaw + xCloud

This is a **Node.js Server-Side Rendered (SSR)** application. No complex build step is initially required to run this because it does not use a bundler (like Webpack or Vite). 

### Is this an SSR App?
**Yes.** Content is rendered dynamically on the server via EJS (`views/` folder) before being sent to the browser. 

### Is a Web Root needed?
**No.** Since `server.js` and `package.json` are placed directly in the main repository root, you should leave the "Web Root Path" field **blank** (or `/`) when configuring xCloud.

### xCloud Deployment Steps

Follow these instructions to deploy this project via xCloud Managed Hosting:

1. **Create Node.js App**: In xCloud dashboard, click "Create Site", select "Node.js" and choose **Clone a Git Repository**.
2. **Project Settings**:
   - Enable **Server-Side Rendering (SSR)** toggle since this app depends on Express serving dynamically rendered EJS HTML pages.
   - **Port**: `3000` (or the port defined in your `.env`)
   - **Start Command**: `npm start`
   - **Web Root Path**: *(Leave Blank)*
3. **Connect Git**: Connect your GitHub/GitLab account, choose your `fake-agency` repository and the main branch.
4. **Push to Deploy**: Enable **Push to Deploy** so your xCloud site updates automatically whenever you push code.
5. **Environment Configuration**: Set your `.env` contents within the xCloud Environment Editor. 
6. **Deploy**: Start the deployment! xCloud will run `npm install` automatically, followed by your start command to spin up the server beautifully. 
