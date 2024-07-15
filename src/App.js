import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimalSurvey from "./components/AnimalSurvey";
import Questions from "./pages/Questions";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<AnimalSurvey />} />
          <Route path="/animal-questions" element={<Questions />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
