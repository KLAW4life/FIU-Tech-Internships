# 01 - Getting Started

This guide will help you set up the FIU Tech Internships website on your local computer so you can make changes safely before deploying them live.

## Prerequisites

Before you begin, install these tools on your computer:

| Tool | Purpose | Download Link |
|------|---------|---------------|
| **Node.js** | Runs JavaScript outside the browser | [nodejs.org](https://nodejs.org/) (includes npm) |
| **Git** | Downloads code from GitHub | [git-scm.com](https://git-scm.com/) |
| **Code Editor** | Edit the website files | [VS Code](https://code.visualstudio.com/) (recommended) |

> **Verify Installation**: Open your terminal/command prompt and run:
> ```bash
> node --version   # Should show v18 or higher
> npm --version    # Should show v9 or higher
> git --version    # Should show v2.40 or higher
> ```

## Step 1: Clone the Repository

Copy the website code from GitHub to your computer:

```bash
git clone https://github.com/KLAW4life/FIU-Tech-Internships.git
cd FIU-Tech-Internships
```
## Step 2: Install Dependencies

Download all the required packages:

```bash
npm install
```

> **Note:** This may take 1-2 minutes the first time. You'll see a node_modules folder created.

## Step 3: Run the Development Server

Start a local preview of the website:

```bash
npm run dev
```

Open http://localhost:5173/ in your web browser. You should see the FIU Tech Internships website.

## Stopping the Server

Press `Ctrl + C` in the terminal to stop the development server.