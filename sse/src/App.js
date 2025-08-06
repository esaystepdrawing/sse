import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import SathyaSaiMenu from './components/navbarmenu/navmenu';
import YoutubeEmbed from './components/YoutubeEmbed/YoutubeEmbed';

function App() {
  return (
    <div className="App">
      <SathyaSaiMenu />
      <Header />
      <YoutubeEmbed />
      <Footer />
    </div>
  );
}

export default App;
