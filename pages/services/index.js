import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServicesSection from '../../components/ServicesSection';

export default function Services() {
    return (
        <>
            <Header />
            <main className="container mx-auto">
                <h1 className="text-3xl font-bold px-6 pt-6">Our Services</h1>
                <ServicesSection />
            </main>
            <Footer />
        </>
    );
}