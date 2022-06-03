import PropTypes from "prop-types";


const Filter = ({value, onChange}) => {
    return (
    <label>
        Фільтр на ім'я: <input type='text' value={value} onChange={onChange} />
       </label>
       )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired,
  };

export default Filter;