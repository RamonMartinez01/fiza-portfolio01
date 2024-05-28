
import './Styles/ContactPage.css'

const ContactPage = () => {
 

  return (
    <div className='contact__container'>
      <div className="contact__title">
        <span className="contact__title-01">Contact Me</span>
        <span className="contact__title-02">Contact</span>
      </div>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            type="text"
            name="name"
            className="form__input"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <label className="form__label">Name</label>
        </div>
        <div className="form__group">
          <input
            type="email"
            name="email"
            className="form__input"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <label className="form__label">Email</label>
        </div>
        <div className="form__group">
          <textarea
            name="message"
            className="form__textarea"
            placeholder="Message"
            onChange={handleChange}
            required
          ></textarea>
          <label className="form__label">Message</label>
        </div>
        <button type="submit" className="form__button">Send</button>
        <p className="form__response">{responseMessage}</p>
      </form>
    </div>
  );
};


export default ContactPage