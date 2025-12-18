// src/App.jsx
// (Ensamblaje y Estructura)
import Header from './components/header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Beers from './components/Beers';
import Gallery from './components/Gallery';
import NewsForm from './components/NewsForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    // <div className="index"> es la clase que estaba en el <body> original
    <div className="index"> 
        <Header />

        <main>
            {/* Las secciones se renderizan en orden, usando navegación de anclas (#) */}
            <Home />
            <AboutUs />
            <Beers />
            <Gallery />
            <NewsForm />
            <Contact />
        </main>
        
        <Footer />
        <WhatsAppButton />
    </div>
  );
}

export default App;
