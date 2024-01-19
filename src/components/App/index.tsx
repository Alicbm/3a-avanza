import { HashRouter } from 'react-router-dom';
import RootRouter from '../../router/RootRouter';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { AppProvider } from '../../AppContext';

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <NavBar />
        <main>
          <RootRouter />
        </main>
        <Footer />
      </HashRouter>
    </AppProvider>
  );
}

export default App;
