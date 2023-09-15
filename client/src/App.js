import { ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsScreens from './screens/ProductsScreens';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/products' element={<ProductsScreens />}>
            </Route>
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
