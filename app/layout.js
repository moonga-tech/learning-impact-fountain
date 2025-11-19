import "./globals.css";
import "./css/media-query.css";
import "./css/style.css";

export const metadata = {
  title: "Learning Impact Foundation",
  description: "Learning Impact Foundation — measuring learning and igniting progress.",
  icons: {
    icon: "/images/favicon-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/images/favicon-logo.png" />
        <meta name="description" content="Learning Impact Foundation — measuring learning and igniting progress." />
        <meta property="og:title" content="Learning Impact Foundation" />
        <meta property="og:description" content="Improving primary education across Zambia through assessment, resources and teacher support." />
        <link rel="canonical" href="https://learningimpactfoundation.org" />
        <link rel="apple-touch-icon" href="/images/favicon-logo.png" />
        <meta property="og:image" content="/images/logo.png" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossorigin="anonymous" referrerPolicy="no-referrer" />
        
      </head>
      <body id="body">
        <div className="main-box">
          {children}
        </div>
      </body>
    </html>
  );
}
