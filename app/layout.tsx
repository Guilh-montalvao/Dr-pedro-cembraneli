import type { Metadata } from 'next';
import './globals.css';
import { criticalStyles } from './styles.generated';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {title:'Dr. Pedro Cembraneli | Neurocirurgia em Goiânia',description:'Neurocirurgia de coluna e crânio com avaliação individualizada. Conheça o Dr. Pedro Nogarotto Cembraneli. CRM-GO 26.326 | RQE 21.882.',icons:{icon:'/images/logo-pedro-transparent.png'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><head><style id="site-critical-styles" dangerouslySetInnerHTML={{__html:criticalStyles}} /></head><body>{children}</body></html>}
