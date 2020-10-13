import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DisplayInitial from './DisplayInitial';
import Information from './Information';
import Name from './Name';
import Phone from './Phone';

// Creating a Styled instance for use of hover on Wrapper
const StyledDisplayInitial = styled(DisplayInitial)``;

const Wrapper = styled.div`
margin: 0px;
padding: 15px;
width: 100%;
background-color: #f0f0f0;
display: flex;
flex: 1;
justify-content: center;
align-items: center;
border: solid 1px #ddd;

&:hover {
  cursor: pointer;
  background: #fff;
  transition: background-color .2s;
}

&:hover > ${StyledDisplayInitial} {
  background: #d52a30;
  background: repeating-linear-gradient(
    45deg,
    #e32d33,
    #e32d33 10px,
    #d52a30 10px,
    #d52a30 20px
  );
  transition: background .2s;
};

@media (min-width: 992px) {
  margin: 10px;
  flex: 0 0 310px;
  width: 310px;
  height: 150px;
  box-shadow: 2px 2px 1px #ccc;
}
`;

const Contact = ({
  name, phone, contactId, onOpenEdit,
}) => {
  const handleOpenEdit = () => {
    onOpenEdit(contactId);
  };

  return (
    <Wrapper onClick={handleOpenEdit}>
      <StyledDisplayInitial>
        {name[0].toUpperCase()}
      </StyledDisplayInitial>
      <Information>
        <Name>
          {name}
        </Name>
        <Phone>
          {phone}
        </Phone>
      </Information>
    </Wrapper>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  onOpenEdit: PropTypes.func.isRequired,
};

export default Contact;
