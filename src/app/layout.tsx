import type { Metadata } from 'next';
import './globals.css';
import { StructuredData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://apgquimica.com.mx'),
  title: 'APG Química | Especialidades Químicas, Distribución Industrial y Clariant en México',
  description: 'Comercialización y formulación técnica de especialidades químicas, aditivos y fluidos caloportadores Antifrogen® Clariant en México. Más de 20 años atendiendo 12 sectores industriales con laboratorio propio en Querétaro.',
  keywords: [
    'APG Química',
    'Clariant México',
    'Antifrogen N',
    'Antifrogen L',
    'especialidades químicas Querétaro',
    'distribuidor de químicos industriales',
    'fluidos caloportadores',
    'inhibidores de corrosión',
    'aditivos para plásticos',
    'materias primas químicas',
    'laboratorio de formulación química'
  ],
  authors: [{ name: 'APG Química – Química, S.A. de C.V.' }],
  creator: 'APG Química',
  publisher: 'APG Química',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://apgquimica.com.mx',
    siteName: 'APG Química',
    title: 'APG Química | Especialidades Químicas y Fluidos Caloportadores Clariant',
    description: 'Soluciones químicas industriales formuladas sobre medida. Representantes oficiales de Clariant y laboratorio propio de soporte técnico en Querétaro.',
    images: [
      {
        url: '/images/APG-quimica.png',
        width: 600,
        height: 200,
        alt: 'APG Química – Soluciones Químicas Especializadas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APG Química | Especialidades Químicas Industriales',
    description: 'Soluciones químicas industriales, laboratorio de soporte técnico y fluidos caloportadores Antifrogen® Clariant en México.',
    images: ['/images/APG-quimica.png']
  },
  icons: {
    icon: '/images/APG-quimica.png',
    apple: '/images/APG-quimica.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
