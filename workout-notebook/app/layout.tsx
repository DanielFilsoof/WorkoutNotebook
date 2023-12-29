/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'
import DesktopFooter from './components/DesktopFooter';

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />

            <main className={styles.main}>{props.children}</main>

            <DesktopFooter />
          </section>
        </body>
      </html>
    </Providers>
  )
}
