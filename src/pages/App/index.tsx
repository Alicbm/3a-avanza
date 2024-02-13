import { HashRouter } from 'react-router-dom';
import { AppProvider } from '../../context';
import RootRouter from '../../router/RootRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <RootRouter />
        </main>
        <Footer />
      </HashRouter>
    </AppProvider>
  );
}

export default App;
