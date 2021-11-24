import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteContact } from '../../redux/actions'
import { getFilteredContacts } from '../../redux/selectors'
import './ContactItem.css'

const ContactItem = () => {
  const contactsList = useSelector(getFilteredContacts)
  const dispatch = useDispatch()
  return (
    <>
      {contactsList.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type='button'
            className='delete-button'
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  )
}

ContactItem.propTypes = {
  filteredContacts: PropTypes.array,
  deleteContact: PropTypes.func,
}

export default ContactItem
