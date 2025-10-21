// structured-data.js - Inject JSON-LD schemas into page
(function() {
    'use strict';
    
    // Helper function to inject schema
    function injectSchema(schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    
    // Organization Schema (for all pages)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name": "GladGrade Holding Corp",
      "alternateName": "GladGrade",
      "description": "Customer satisfaction analytics platform providing transparent feedback and Global Customer Satisfaction Grade (GCSG) ratings",
      "url": "https://www.gladgrade.com",
      "logo": "https://www.gladgrade.com/images/gladgrade-logo.jpg",
      "slogan": "You Deserve Better",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8306 Mills Dr. Suite 405",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "postalCode": "33183",
        "addressCountry": "US"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Investor Relations",
          "email": "investor.relations@gladgrade.com",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "email": "customer.support@gladgrade.com",
          "availableLanguage": "English"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61568453471966",
        "https://x.com/glad_grade",
        "https://www.instagram.com/gladgrade/",
        "https://www.linkedin.com/company/gladgrade",
        "https://www.youtube.com/@GLADGRADE",
        "https://www.tiktok.com/@gladgrade"
      ],
      "founder": [
        {
          "@type": "Person",
          "name": "Miguel A. Giraldo",
          "jobTitle": "Founder & Chief Executive Officer"
        }
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Miguel A. Giraldo",
          "jobTitle": "Founder & Chief Executive Officer"
        },
        {
          "@type": "Person",
          "name": "Patrick J. Doliny",
          "jobTitle": "Chief Commercial Officer"
        }
      ],
      "knowsAbout": [
        "Customer Satisfaction Analytics",
        "Business Intelligence",
        "Customer Experience Management",
        "Global Customer Satisfaction Grade (GCSG)",
        "Review Management",
        "SaaS Solutions"
      ],
      "areaServed": {
        "@type": "Place",
        "name": "Global"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "GladGrade Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Global Customer Satisfaction Grade (GCSG)",
              "description": "Standardized customer satisfaction rating system (300-850 scale) similar to FICO scores"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Customer Analytics Dashboard",
              "description": "Business intelligence and analytics tools for customer satisfaction metrics"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Review Management Platform",
              "description": "Platform for collecting, managing, and analyzing customer reviews"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MobileApplication",
              "name": "GladGrade Mobile App",
              "description": "Consumer app for earning Glad Points by submitting reviews and receipts",
              "operatingSystem": "iOS, Android",
              "applicationCategory": "BusinessApplication"
            }
          }
        ]
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "name": "Glad Points Rewards Program",
          "description": "Loyalty rewards program where consumers earn points for verified reviews"
        }
      ]
    };
    
    // WebSite Schema (for homepage)
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "GladGrade",
      "url": "https://www.gladgrade.com",
      "description": "Customer satisfaction analytics platform - Earn Glad Points and improve business ratings",
      "publisher": {
        "@type": "Corporation",
        "name": "GladGrade Holding Corp"
      }
    };
    
    // Inject organization schema on all pages
    injectSchema(organizationSchema);
    
    // Inject website schema only on homepage
    const currentPage = window.location.pathname;
    if (currentPage === '/' || currentPage === '/index.html' || currentPage.endsWith('index.html')) {
      injectSchema(websiteSchema);
    }
    
  })();