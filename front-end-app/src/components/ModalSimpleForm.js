import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Grid} from 'semantic-ui-react';

const inlineStyle = {
  modal : {
    marginTop: '-300px',
    marginLeft: 'centered',
    marginRight: 'centered'
  }
};
const ModalSimpleForm = (props) =>{
    return(
      <Modal
        size='large'
        dimmer='inverted'
        style = {inlineStyle.modal}
        open = {props.isOpen}
        closeIcon
        onClose = {props.modalClose}
        >
        <Modal.Header>
          {props.title}
        </Modal.Header>
        <Modal.Content>
          <Grid.Column width={6}>
            {props.form}
          </Grid.Column>
        </Modal.Content>
      </Modal>
    )
  }

ModalSimpleForm.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  form: PropTypes.element.isRequired,
  modalClose: PropTypes.func.isRequired,
}

export default ModalSimpleForm;
