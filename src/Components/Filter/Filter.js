import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { getFilter } from '../../redux/selectors'
import { filterValue } from '../../redux/actions'
import './Filter.css'

const Filter = () => {
  const value = useSelector(getFilter)
  const dispatch = useDispatch()

  return (
    <div className='filter-container'>
      <label className='label' htmlFor='filter'>
        Find contacts by name
      </label>
      <input
        className='input'
        id='filter'
        type='text'
        name='filter'
        value={value}
        onChange={(e) => dispatch(filterValue(e.target.value))}
      />
    </div>
  )
}

Filter.propTypes = {
  handleChangeFilter: PropTypes.func,
}

export default Filter
