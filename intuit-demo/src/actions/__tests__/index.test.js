import { createContact, updateContact, deleteContact } from '../index';
import { CONTACT_CREATE, CONTACT_UPDATE, CONTACT_DELETE } from '../types';

describe('createContact', () => {
  it('has the correct type', () => {
    const action = createContact();

    expect(action.type).toEqual(CONTACT_CREATE);
  });

  it('has the correct payload', () => {
    const contactDetails = {
      name: 'Nathan Hannig',
      phone: '133-152-9222',
      address: '46090 Ridge Oak Drive',
      nickname: 'Nate',
    };

    const action = createContact(contactDetails);

    const keys = Object.keys(action.payload);

    expect(action.payload[keys[0]]).toEqual(contactDetails);
  });
});

describe('updateContact', () => {
  it('has the correct type', () => {
    const action = updateContact();

    expect(action.type).toEqual(CONTACT_UPDATE);
  });

  it('has the correct payload', () => {
    const contactId = '123-4567-890';
    const contactDetails = {
      name: 'Nathan Hannig',
      phone: '133-152-9222',
      address: '46090 Ridge Oak Drive',
      nickname: 'Nate',
    };

    const action = updateContact(contactId, contactDetails);

    expect(action.payload).toEqual({
      [contactId]: contactDetails,
    });
  });
});

describe('deleteContact', () => {
  it('has the correct type', () => {
    const action = deleteContact();

    expect(action.type).toEqual(CONTACT_DELETE);
  });

  it('has the correct payload', () => {
    const contactId = '123-4567-890';

    const action = deleteContact(contactId);

    expect(action.payload).toEqual(contactId);
  });
});
