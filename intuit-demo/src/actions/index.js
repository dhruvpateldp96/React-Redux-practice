import uuidv4 from 'uuid/v4';
import { CONTACT_CREATE, CONTACT_UPDATE, CONTACT_DELETE } from './types';

export const createContact = (values) => {
  const contact = {
    [uuidv4()]: values,
  };

  return ({
    type: CONTACT_CREATE,
    payload: contact,
  });
};

export const updateContact = (id, values) => {
  const contact = {
    [id]: values,
  };

  return ({
    type: CONTACT_UPDATE,
    payload: contact,
  });
};

export const deleteContact = id => ({
  type: CONTACT_DELETE,
  payload: id,
});
