import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLanguage } from '../../src/contexts/LanguageContext';

export default function Lighting() {
    const { t } = useLanguage();
    return (
        <>
            <Header />
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">{t.lighting.title}</h1>
                <p>{t.lighting.desc}</p>
            </main>
            <Footer />
        </>
    );
}