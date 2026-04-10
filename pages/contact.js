import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <>
            <Header />
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p>Email: contact@lazybeanslab.com</p>
                <p>Phone: +1 234 567 8900</p>
            </main>
            <Footer />
        </>
    );
}