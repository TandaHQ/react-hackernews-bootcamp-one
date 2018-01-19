import React from 'react';

import Loading from '../../Component/Loading';


export default View => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentWillMount() {
    this.props.onMount().then(() =>
      this.setState({ loaded: true })
    );
  }

  render() {
    return this.state.loaded ? (
      <View {...this.props} />
    ) : (
      <Loading />
    );
  }
}
