import React from 'react';
import { Counter } from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <Counter
        count={this.state.count}
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
        reset={this.reset}
      />
    );
  }
}

export default App;