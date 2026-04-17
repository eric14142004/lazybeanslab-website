import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <>
            <Header />
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p>Email: lazysmarthome29@gmail.com</p>
                <p>Phone: +1 778 998 8857</p>
                <p>
                    YouTube Channel:&nbsp;
                    <a href="https://www.youtube.com/channel/UCqAmwbBTyUhrV3g_w7PW9Gg" target="_blank" rel="noopener noreferrer">
                        Lazy Beans Smart Home
                    </a>
                </p>
            </main>
            <Footer />
        </>
    );
}