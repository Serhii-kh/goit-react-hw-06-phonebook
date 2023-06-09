import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
// import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactsListSlice';
import { useDispatch } from 'react-redux';
import css from '../ContactsList/ContactList.module.css'
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts}) => {
	const dispatch = useDispatch();

	return (
		<ul className={css.contactsList}>
			{contacts.map(({ name, number, id }) => (
				<ContactsListItem key={id} name={name} number={number}>
					<button type="button" onClick={() => dispatch(deleteContact(id))}>
						Delete
					</button>
				</ContactsListItem>
			))}
		</ul>
	);
}

ContactsList.propTypes = {
	contacts: PropTypes.array.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};
