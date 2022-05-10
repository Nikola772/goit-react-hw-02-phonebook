 
import React from 'react';
import shortid from 'shortid';
 
import './App.css';
import Form from './components/Form/Form';
import ContactsList from './components/Contacts/ContactsList';
import Filter from './components/Filter/Filter';

 

class App extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
       
      
    }
  }

  addContacts = (name, number) => {
        const contact = {
          id: shortid.generate(),
           name,
           number
            
        };

        this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }))
  }

  deleteContacts = (contactsId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsId)
    }))
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter =  filter.toLowerCase();

    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

 
   
   

   

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

  return (
    <>
    <div className="App">
       <h1>Телефонна книга</h1>
       <Form onSubmit={this.addContacts}   />

       <Filter value={filter} onChange={this.changeFilter} />
       <ContactsList contacts={visibleContacts} onDeleteContacts={this.deleteContacts} />
       
    </div>
    </>
  );
}
}

export default App;
