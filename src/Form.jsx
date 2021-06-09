import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t, i18n } = useTranslation();
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              {t("contact-label-email")}
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder={t("contact-placeholder-email")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" class="form-label">
              {t("contact-label-message")}
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
