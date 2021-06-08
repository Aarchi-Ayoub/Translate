import React, { Fragment } from "react";

const Select = () => {
  return (
    <Fragment>
      <div className="container mt-2" style={{ width: "20%", float: "right" }}>
        <div className="row">
          <div className="col">
            <select className="form-select" aria-label="Default select example">
              <option selected>Open to chose a langage</option>
              <option value="fr">Francais</option>
              <option value="eng">Anglais</option>
              <option value="ar">Arabe</option>
            </select>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Select;
