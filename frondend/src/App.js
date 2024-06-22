import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login.jsx';
import Landingpage from './pages/Landingpage.jsx';
import DaftarRelawan from './pages/DaftarRelawan.jsx';
import DaftarOrganisasi from './pages/DaftarOrganisasi.jsx';
import Tentangkami from './pages/Tentangkami.jsx'
import Lprelawan from './pages/Lprelawan';
import Lporganisasi from './pages/Lporganisasi';
import Donasi from './pages/Donasi.jsx'
import Donate from './pages/Donate.jsx'
import Dashboardrelawan from './pages/Dashboardrelawan.jsx'
import ProfileRelawan from './pages/ProfileRelawan.jsx';
import ProfileOrganisasi from './pages/ProfileOrganisasi.jsx';
import InfoOrganisasi from './pages/InfoOrganisasi.jsx';
import CariOrganisasi from './pages/CariOrganisasi.jsx';
import CariRelawan from './pages/CariRelawan.jsx';
import CariProyek from './pages/CariProyek.jsx';
import Success from './components/Success';
import RequestPasswordReset from './pages/RequestPasswordReset.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import DetailProyek from './/components/DetailProyek';


const App = () => {
  return (
    <div>
     
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Tentangkami" element={<Tentangkami />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/DaftarRelawan" element={<DaftarRelawan />} />
          <Route path="/DaftarOrganisasi" element={<DaftarOrganisasi/>} />
          <Route path="/RequestPasswordReset" element={<RequestPasswordReset/>} />
          <Route path="/ResetPassword" element={<ResetPassword/>} />
          <Route path="/Lprelawan" element={<Lprelawan />} />
          <Route path="/Lporganisasi" element={<Lporganisasi />} />
          <Route path="/Donasi" element={<Donasi />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Dashboardrelawan" element={<Dashboardrelawan />} />
          <Route path="/ProfileRelawan" element={<ProfileRelawan />} />
          <Route path="/ProfileOrganisasi" element={<ProfileOrganisasi />} />
          <Route path="/InfoOrganisasi" element={<InfoOrganisasi />} />
          <Route path="/CariProyek" element={<CariProyek />} />
          <Route path="/DetailProyek" element={<DetailProyek/>} />
          <Route path="/CariOrganisasi" element={<CariOrganisasi />} />
          <Route path="/CariRelawan" element={<CariRelawan />} />
          <Route path="/success" element={<Success />} />
      </Routes>
     
    </div>
  )
}

export default App;
