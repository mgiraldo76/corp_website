# GladGrade Corporate Website

A modern, SEO-optimized static website for GladGrade Holding Corp built with Next.js 15 and designed for Firebase hosting.

## Features

- **Static Site Generation**: Fully exportable as static HTML/CSS/JS for Firebase hosting
- **SEO Optimized**: Semantic HTML, meta tags, and proper heading hierarchy
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Corporate Design**: Professional yet friendly aesthetic
- **12 Pages**: Complete website structure including investor relations

## Pages

1. Homepage
2. About
3. Leadership
4. Investor Relations (hub)
5. Why Invest in GladGrade
6. GladGrade Financials
7. Global Customer Satisfaction Grade (GCSG)
8. Corporate Governance
9. Shareholder Services
10. Events & Presentations
11. Client Portal Terms & Conditions
12. Privacy & Security

## Deployment to Firebase

1. Build the static site:
   \`\`\`bash
   npm run build
   \`\`\`

2. The static files will be in the `out` directory

3. Deploy to Firebase:
   \`\`\`bash
   firebase init hosting
   # Select 'out' as your public directory
   firebase deploy
   \`\`\`

## Development

\`\`\`bash
npm run dev
\`\`\`

## Technology Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- TypeScript
- Lucide Icons
