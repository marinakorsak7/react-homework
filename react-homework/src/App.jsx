import './styles/main.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;