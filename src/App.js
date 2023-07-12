import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
// components & reducers
import { MinTilgang } from 'components/MinTilgang';
import { Kontakt } from 'components/contact/Kontakt';
import { PageWrapper } from 'components/GlobalStyles';
import { PraktiskInfo } from './components/praktiskInfo/PraktiskInfo'
import { ui } from './reducers/ui'
import { Forside } from './components/forside/Forside';
import { NotFound } from './components/NotFound';
import { Header } from './components/header/Header';
import { Footer } from './components/Footer'

const reducer = combineReducers({
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <PageWrapper>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Forside />} />
            <Route path="/minTilgang" element={<MinTilgang />} />
            <Route path="/praktiskInfo" element={<PraktiskInfo />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </PageWrapper>
  )
}
