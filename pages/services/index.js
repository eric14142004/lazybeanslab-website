import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { services } from '../../data/services';
import ServiceCard from '../../components/ServiceCard';

export default function Services() {
    return (
        <>
            <Header />
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services.map(s => <ServiceCard key={s.id} service={s} />)}
                </div>
            </main>
            <Footer />
        </>
    );
}