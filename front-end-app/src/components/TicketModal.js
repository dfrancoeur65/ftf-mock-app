import React from 'react';
import { Button, Modal , TextArea, Grid} from 'semantic-ui-react';

const TicketModal = (props) => (
  <Modal trigger={<Button>Open</Button>} centered={false}>
  <Grid>
  <h4> Issue #34534 | 34A Beecher Ave. </h4>
  <Grid.Row centered={false} columns={1}>
    <Button floated={'left'} color={'yellow'} size={'mini'}>
      In Process
    </Button>
    <Button size={'mini'} class='ui black basic button'>
      Bathroom
    </Button>
  </Grid.Row>
  <Grid.Row columns={3}>
    <Grid.Column width={8}>
      <div class='ui items'>
        <div class='ui item'>
        Description
        </div>
        <div class='meta'>
        We had a problem last night with our faucet
        </div>
      </div>
      <div class = 'ui items'>
        <div class='header'>Add Comment</div>
        <TextArea placeholder={'write a comment'}>
        </TextArea>
      </div>
    </Grid.Column>
    <Grid.Column>
      <Button.Group floated={'right'} vertical={true} compact={true}>
        <Button>Assigned Users</Button>
        <Button>Contact Requester</Button>
      </Button.Group>
    </Grid.Column>
  </Grid.Row>
</Grid>
  </Modal>
)

export default TicketModal;
