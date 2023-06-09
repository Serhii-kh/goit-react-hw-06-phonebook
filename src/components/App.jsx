import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import css from '../components/wrapper/wrapper.module.css';

export const App = () => {
	const [filter, setFilter] = useState('');
	const contacts = useSelector(state => state.contacts)
	
	const changeFilter = e => {
		const { value } = e.currentTarget;
		setFilter(value);
	};

	const getFilteredContacts = () => {
		const normalizedFilter = filter.toLowerCase();

		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normalizedFilter)
		);
	};
	const filteredContacts = getFilteredContacts();

	
	return (
		<div className={css.phonebook}>
			<h1>Phonebook</h1>
			<ContactForm />
			<h2>Contacts</h2>
			<Filter value={filter} onChange={changeFilter} />
			<ContactsList
				contacts={filteredContacts}
			/>
		</div>
	);
};
