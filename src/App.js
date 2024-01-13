import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Switch 대신 Routes를 사용합니다.
import { AuthProvider } from "./components/providers/AuthProvider";
import store from '../src/store';
import './App.css';
import IndexLayOut from "./layouts/IndexLayout/index_layout";
import Layout from "./layouts/MainLayout/layout";
import Home from './page/Home';
import Products from './page/Products';
import Services from './page/Services';
import SignUp from './page/SignUp';
import SignUpForm from './page/SignUpForm';



function App() {

  return (
      <>
        <Provider store={store}>
          
          <Router>
            <Routes>
                <Route path='/' element={<IndexLayOut />}>
                  <Route index element={<Home />} />
                  <Route path='/services' element={<Services />} />
                  <Route path='/products' element={<Products />} />
                  <Route path='/sign-up' element={<SignUp />} />
                  <Route path='/sign-up-form' element={<SignUpForm />} />
                  {/* <Route path='/Login' element={<Login />} /> */}
                </Route>
                <Route element={<AuthProvider />} >
                  <Route path="/main" element={<Layout />} />
                </Route>
            </Routes>
          </Router>
        </Provider>
      </>
  );
}

export default App;