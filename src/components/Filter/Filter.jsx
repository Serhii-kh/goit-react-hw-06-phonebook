import { useSelector } from 'react-redux';
import css from '../Filter/Filter.module.css';

export const Filter = ({ changeFilter }) => {
	const filterValue = useSelector(state => state.filter);

  return (
    <label className={css.Filter}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={changeFilter}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};
