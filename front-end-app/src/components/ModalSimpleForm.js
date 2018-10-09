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
class ModalSimpleForm extends React.Component {


  render () {
    const form = this.props.form;

    return(

    <Modal
      size='large'
      dimmer='inverted'
      style = {inlineStyle.modal}
      open = {this.props.isOpen}
      closeIcon
      onClose = {this.props.modalClose}
      >
      <Modal.Header>
      {this.props.title}
      </Modal.Header>
      <Modal.Content>
        <Grid.Column width={6}>
        {form}
        </Grid.Column>
      </Modal.Content>
    </Modal>
  )
  }
}

ModalSimpleForm.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  form: PropTypes.element.isRequired,
  modalClose: PropTypes.func.isRequired,
}

export default ModalSimpleForm;
