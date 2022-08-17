
import Buy from './Buy';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import News from './News';
import ScrollToTop from './ScrollToTop';
import Sell from './Sell';

function LandingPage() {
  return (
    <div>

    <ScrollToTop />
    <Navbar />
    <Home />
    <Buy />
    <Sell />
    <News />
    <Footer />
    </div>
    
  );
}

export default LandingPage;
