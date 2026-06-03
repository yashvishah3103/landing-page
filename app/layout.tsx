import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yashvishah3103.github.io/landing-page/'),
  title: 'Yashvi Shah | AI/ML Engineer & Vision-Language AI Developer',
  description:
    'Portfolio of Yashvi Shah, an AI/ML engineer and research enthusiast working across VLMs, computer vision, TinyML, LLM optimization, vector databases, and enterprise data engineering.',
  keywords: [
    'Yashvi Shah',
    'AI ML Engineer',
    'Vision Language AI',
    'TinyML',
    'Qdrant',
    'SparseGPT',
    'LLM Optimization',
    'Data Engineering',
    'Accenture',
    'Samajh AI'
  ],
  authors: [{ name: 'Yashvi Shah' }],
  openGraph: {
    title: 'Yashvi Shah | AI/ML Engineer & Vision-Language AI Developer',
    description:
      'Research-oriented AI/ML portfolio spanning vision-language systems, TinyML publications, LLM optimization, and enterprise data engineering.',
    url: 'https://yashvishah3103.github.io/landing-page/',
    siteName: 'Yashvi Shah Portfolio',
    images: ['/images/profile.jpg'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yashvi Shah | AI/ML Engineer',
    description: 'AI research depth, production ML systems, and enterprise engineering trajectory.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2VPRKKTKN6" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2VPRKKTKN6');
          `}
        </Script>
      </body>
    </html>
  );
}
