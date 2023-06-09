import css from '../ContactForm/ContactForm.module.css';
// import PropTypes from 'prop-types';
import { addContact } from 'redux/ContactFomSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import shortid from 'shortid';

export const ContactForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(state);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addContact({
        id: shortid.generate(),
        name,
        number,
      })
    );

    setName('');
    setNumber('');

    onFormSubmit(name, number);

    e.currentTarget.reset();
  };

  return (
    <>
      <form className={css.ContactForm} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.submitBtn}>
          Add contact
        </button>
      </form>
    </>
  );
};

// ContactForm.propTypes = {
//   onFormSubmit: PropTypes.func.isRequired,
// };
