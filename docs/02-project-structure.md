
# 02 - Project Structure

This guide explains where different parts of the website code live. Understanding this will help you find the right files to edit.

## Top-Level Files (Root Directory)

| File/Folder | Purpose |
|-------------|---------|
| `index.html` | The main HTML file that loads the React app |
| `package.json` | Lists all dependencies and scripts |
| `vite.config.ts` | Build configuration (don't modify unless needed) |
| `tailwind.config.ts` | Styling configuration (colors, fonts, etc.) |
| `vercel.json` | Deployment settings for Vercel |
| `tsconfig.json` | TypeScript settings |
| `public/` | Static assets (images, fonts, favicon) |
| `src/` | **Main code folder** - you'll edit this most |

## Key Files to Know

### `src/App.tsx`
Controls which page shows for each URL (example):
```tsx
<Route path="/" element={<Home />} />
<Route path="/sprinternship" element={<Sprinternship />} />
```
## src/components/ui

Reusable pieces used across multiple pages (example):

| File/Folder | What It Contains |
|-------------|---------|
| `ui` | Containes all  compenent elements |
| `FloatingBubble.tsx` | Bubble Design  |
| `Logo.tsx` | Homepage logo and design |
	
## src/pages/

Each file represents one full page (matches the navigation items):

| File | URL Path |	Page Name |
|-------------| -----------| -------------|
|Index.tsx | / | Homepage
|Not Found.tsx|	*| Not found page |

## public

Folder that contains all the images used in the project

## Configuration Files (Rarely Edit)

| File | When to Edit |
| ---------- | ------------ |
|tailwind.config.ts  |	To add custom colors, fonts, or breakpoints |
|vite.config.ts|	To change build settings (advanced) |
|vercel.json |	To change deployment rules|