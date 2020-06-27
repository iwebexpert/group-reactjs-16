import { connect } from 'react-redux';

import { Header } from 'components/Header';

function mapStateToProps( state ) {
  const { profile: { username } } = state;
  return { username };
}

export default connect(mapStateToProps)( Header );