import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Home from "./Home";
import Form from "./Form";
function App() {
  const { t, i18n } = useTranslation();
  const handelChanges = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="App">
      <Header />
      <div className="container mt-3">
        <div className="row" style={{ width: "25%" }}>
          <div className="col">
            <select
              onChange={handelChanges}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="fr">Francais</option>
              <option selected value="eng">
                Anglais
              </option>
              <option value="ar">Arabe</option>
            </select>
          </div>
        </div>
      </div>

      <Home />
      <Form />
    </div>
  );
}

export default App;
