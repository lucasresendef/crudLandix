import './styles/global.scss'
import { Dashboard } from './components/Dashboard';
import { SellerContextProvider } from './components/contexts/sellerContext';



function App() {
  return (
    <SellerContextProvider>
      <Dashboard/>
    </SellerContextProvider>
  );
}

export default App;
