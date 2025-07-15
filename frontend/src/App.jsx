import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import RootLayout from './components/layouts/RootLayout';
import Home from './view/Home';
import About from './view/About';
import Qualification from './view/Qualification';
import TrainingResources from './view/TrainingResources';
import Gallery from './view/Gallery';
import StudentLogin from './view/StudentLogin';
import SelfEmployment from './view/SelfEmployment';

// Policies
import PoliciesLayout from './components/layouts/PoliciesLayout';
import PrivacyPolicy from './view/Policies/PrivacyPolicy';
import LearnerSupportPolicy from './view/Policies/LearnerSupportPolicy';
import AccessEquityPolicy from './view/Policies/AccessEquityPolicy';
import StudentInformationHandbook from './view/Policies/StudentInformationHandbook';
import AppealsComplaintsPolicy from './view/Policies/AppealsComplaintsPolicy';

// Forms
import ApplicationForm from './view/Forms/applicationForm';
import Enrolment from './view/Forms/enrolment'; 

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='qualifications' element={<Qualification />} />
        <Route path='trainingResources' element={<TrainingResources />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='login' element={<StudentLogin />} />
        <Route path='selfEmployment' element={<SelfEmployment />} />



        <Route path='applicationForm' element={<ApplicationForm />} />
         <Route path='enrolment' element={<Enrolment />} />

        {/* Policies nested under policies layout */}
        <Route path='policies' element={<PoliciesLayout />}>
          <Route index element={<PrivacyPolicy />} />
          <Route path='support-policy' element={<LearnerSupportPolicy />} />
          <Route path='access-equity' element={<AccessEquityPolicy />} />
          <Route path='student-handbook' element={<StudentInformationHandbook />} />
          <Route path='appeals-complaints' element={<AppealsComplaintsPolicy />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
