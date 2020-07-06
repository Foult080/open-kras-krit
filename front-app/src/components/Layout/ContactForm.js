import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { sendContact } from "../../actions/contact";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const ContactForm = ({ sendContact }) => {
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    form: "",
  });

  let history = useHistory();

  const { email, title, form } = formData;

  const OnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    sendContact({ email, title, form });
    history.push("/");
  };

  return (
    <Fragment>
      <div className="container col-lg-4 col-md-4 col-sm-4">
        <form
          className="contact-form ml-auto mx-auto"
          onSubmit={(e) => OnSubmit(e)}
        >
          <h1>Форма обратной связи:</h1>
          <hr />
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email адрес"
            autoFocus
            required
            name="email"
            value={email}
            onChange={(e) => OnChange(e)}
          />
          <input
            type="text"
            id="title-from"
            className="form-control"
            placeholder="Укажите заголовок"
            name="title"
            value={title}
            onChange={(e) => OnChange(e)}
          />
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            required
            name="form"
            placeholder="Укажите суть обращения"
            value={form}
            onChange={(e) => OnChange(e)}
          />
          <button className="btn btn-primary contact-butt" type="submit">
            Отправить
          </button>
          <div>
          <small className="my-2 form-text">
            Нажимая на кнопку вы даёте согласие, на обработку персональных
            данных и соглашаетесь с <a href="/privacy">политикой конфиденциальности</a>
          </small>
          </div>
        </form>
        <div className="someDiv" />
      </div>
    </Fragment>
  );
};

ContactForm.propTypes = {
  sendContact: PropTypes.func.isRequired,
};

export default connect(null, { sendContact })(ContactForm);
