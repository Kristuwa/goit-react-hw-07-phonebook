import { Item, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import toast from 'react-hot-toast';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsLoading);
  const handleDelete = () => {
    dispatch(deleteContact(id))
      .then(response => {
        toast.error(
          `Contact ${response.payload.name} was deleted from your List of Contacts`
        );
      })
      .catch(() => toast.error(`Something wrong`));
  };

  return (
    <Item>
      <p>
        {name}: <span>{number}</span>
      </p>
      <Button type="button" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Delete...' : 'Delete'}
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
