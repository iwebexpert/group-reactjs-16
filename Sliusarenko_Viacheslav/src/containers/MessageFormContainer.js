import { connect } from 'react-redux';

import { MessageForm } from 'components/MessageForm';
import { changeUsername } from 'actions/profile';

function mapStateToProps( state ) {
  const { profile: { username } } = state;
  return { username };
}

function mapDispatchToProps( dispatch ) {
  function onChangeUsername( event ) {
    const { target: { value } } = event;
    dispatch( changeUsername( value ) );
  }
  return { onChangeUsername };
}

export default connect(mapStateToProps, mapDispatchToProps)( MessageForm );