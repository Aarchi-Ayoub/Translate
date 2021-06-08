import React, { Fragment } from "react";
import { useTranslation, Trans } from "react-i18next";
const Home = () => {
  const { t, i18n } = useTranslation();
  const handelChanges = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <Fragment>
      <div className="container mt-3">
        <div className="row" style={{ width: "25%" }}>
          <div className="col">
            <select
              onChange={handelChanges}
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Open to chose a langage</option>
              <option value="fr">Francais</option>
              <option value="eng">Anglais</option>
              <option value="ar">Arabe</option>
            </select>
          </div>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col">
            <h3>{t("title")}</h3>
            <p>{t("text")}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
