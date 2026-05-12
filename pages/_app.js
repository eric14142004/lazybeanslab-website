import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { LanguageProvider, useLanguage } from '../src/contexts/LanguageContext';

function AppHead() {
    const { t } = useLanguage();
    const title = t?.common?.siteTitle || 'Lazy Beans Smart Home';
    const description = t?.common?.siteDescription || 'Lazy Beans Smart Home - smart home consulting, setup, and automation services.';

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    );
}

export default function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const runMainLeaveAnimation = () => {
            const main = document.querySelector('main');
            if (!main) {
                return;
            }

            main.classList.remove('content-route-enter');
            main.classList.add('content-route-leave');
        };

        const runMainEnterAnimation = () => {
            requestAnimationFrame(() => {
                const main = document.querySelector('main');
                if (!main) {
                    return;
                }

                main.classList.remove('content-route-leave');
                main.classList.remove('content-route-enter');
                // Force reflow so the class can replay on every route change.
                void main.offsetWidth;
                main.classList.add('content-route-enter');
            });
        };

        runMainEnterAnimation();
        router.events.on('routeChangeStart', runMainLeaveAnimation);
        router.events.on('routeChangeComplete', runMainEnterAnimation);
        router.events.on('routeChangeError', runMainEnterAnimation);

        return () => {
            router.events.off('routeChangeStart', runMainLeaveAnimation);
            router.events.off('routeChangeComplete', runMainEnterAnimation);
            router.events.off('routeChangeError', runMainEnterAnimation);
        };
    }, [router.events]);

    return (
        <LanguageProvider>
            <AppHead />
            <Component {...pageProps} />
        </LanguageProvider>
    );
}