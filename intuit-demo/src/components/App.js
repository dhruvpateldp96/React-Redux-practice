import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Title from './Title';
import Wrapper from './Wrapper';
import CreateContact from './CreateContact';
import EditContact from './EditContact';
import ShowContacts from './ShowContacts';

class App extends Component {
  state = {
    showCreate: false,
    showEdit: false,
    activeContactId: '',
  }

  handleOpenCreate = () => {
    this.setState({ showCreate: true });
  }

  handleCloseCreate = () => {
    this.setState({ showCreate: false });
  }

  handleOpenEdit = (contactId) => {
    this.setState({
      showEdit: true,
      activeContactId: contactId,
    });
  }

  handleCloseEdit = () => {
    this.setState({
      showEdit: false,
      activeContactId: '',
    });
  }

  render() {
    const { showCreate, showEdit, activeContactId } = this.state;
    const { contacts } = this.props;

    return (
      <React.Fragment>
        <Header>
          <Wrapper>
            <Title>
              Contact List
            </Title>
          </Wrapper>
        </Header>
        <Wrapper>
          { !showCreate && !showEdit && (
            <ShowContacts
              onOpenCreate={this.handleOpenCreate}
              onOpenEdit={this.handleOpenEdit}
              contacts={contacts}
            />
          )}
          { showCreate && (
            <CreateContact
              onCloseCreate={this.handleCloseCreate}
            />
          )}
          { showEdit && (
            <EditContact
              contactId={activeContactId}
              contact={contacts[activeContactId]}
              onCloseEdit={this.handleCloseEdit}
            />
          )}
        </Wrapper>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}

App.propTypes = {
  contacts: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
