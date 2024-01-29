import { HashRouter } from 'react-router-dom';
import { AppProvider } from '../../AppContext';
import RootRouter from '../../router/RootRouter';
import NavBar from '../NavBar';
import Footer from '../Footer';

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
