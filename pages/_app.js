import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <main className="pt-40">
                <Component {...pageProps} />
            </main>
        </>
    );
}