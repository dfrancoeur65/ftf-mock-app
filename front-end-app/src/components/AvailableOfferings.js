import {connect} from 'react-redux';
import {addNewInvestment} from '../redux/modules/InvestmentsReducer';
import {setAvailableOfferings} from '../redux/modules/OfferingsReducer';
import Client from './Client';
import OfferingCards from './OfferingCards';

const mapDispatchToOfferingCardsProps = (dispatch, props) =>(
  {
  onMount:()=>Client.getOfferings(
    (offerings)=>(
      dispatch(
        setAvailableOfferings(offerings)
      )
    )
  ),
  onInvestmentFormSubmit: (investment) =>(
    dispatch(addNewInvestment(investment))
  )
}
);

const mapStateToOfferingCardsProps = (state)=>(
  {
      availableOfferings:state.availableOfferings,
  }
)

const AvailableOfferings = connect(
  mapStateToOfferingCardsProps,
  mapDispatchToOfferingCardsProps,
)(OfferingCards);

export default AvailableOfferings;
