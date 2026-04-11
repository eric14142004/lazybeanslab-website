import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <header className="fixed top-0 left-0 w-full h-16 z-50">
                Header
            </header>

            <main className="pt-16">
                <Component {...pageProps} />
            </main>
        </>
    );
}