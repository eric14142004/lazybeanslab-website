import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
    return (
        <>
            <Header />
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">About Lazy Beans Lab</h1>
                <p>We are a professional Smart Home consulting company providing reliable solutions for modern living.</p>
            </main>
            <Footer />
        </>
    );
}