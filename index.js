// libs
import React, { Component } from 'react';
import { bindActionCreators, createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// actions
const inc = () => ({ type: 'INC' })
const dec = () => ({ type: 'DEC' })

// reducers
function counter(state = 0, action) {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

// component
class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick= { this.props.inc }> + </button>
        <button onClick= { this.props.dec }> - </button>
        Counter: { this.props.state }
      </div>
    )
  }
}

// createStore
const store = createStore(counter);

// container
const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ inc, dec }, dispatch)

const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

// render
React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.body
)
