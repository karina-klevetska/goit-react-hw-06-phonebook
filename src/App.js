import ContactForm from './Components/ContactForm/ContactForm'
import Filter from './Components/Filter/Filter'
import ContactList from './Components/ContactList/ContactList'
import ContactItem from './Components/ContactItem/ContactItem'
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList>
        <ContactItem />
      </ContactList>
    </div>
  )
}

export default App
