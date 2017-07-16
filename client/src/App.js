import React, { Component } from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetch } from './redux/actions/apiActions';
import Navigation from './components/Navigation';

class App extends Component {
 
  componentWillMount() {
    this.props.fetch('/api/pizza');
  }

  // componentWillReceiveProps(nextProps) {
  //   const navigated = nextProps.location !== this.props.location;
  //   const { routes } = this.props;
  //   if (navigated) {
  //     // save the location so we can render the old screen
  //     const prefetchingRequests = matchRoutes(routes, window.location.pathname)
  //       .map(({ route, match }) => {
  //         return route.component.loadData
  //           ? route.component.loadData(match)
  //           : Promise.resolve(null);
  //       })
          
  //     Promise.all(promiseRequests)
  //       .then((prefetchedData) => {
  //          console.log(prefetchedData); 
  //       })
  //   }
  // }
  
  render() {
    const {route} = this.props;
    return (
      <div>
        {this.props.data}
        <Navigation />
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.api.data
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({
   fetch 
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
