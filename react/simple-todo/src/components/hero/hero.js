import PropTypes from 'prop-types';

const heroPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
});

export default heroPropType;