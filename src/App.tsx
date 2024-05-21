import { Routes, Route, BrowserRouter } from 'react-router-dom'
import routes from './config/routes'
import Navbar from './components/Navbar'
import authConfig from './auth_config.json';
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'


import './App.css'
import { store } from './redux/store';

function App() {

  return (
    <Auth0Provider
    domain={authConfig.domain}
    clientId={authConfig.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <Navbar />
        <Provider store={store}>
          <Routes>
            { routes.map((route, index) => (
              <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
              />
              )) }
              </Routes>
        </Provider>
    </BrowserRouter>
    </Auth0Provider>
  )
}

export default App
