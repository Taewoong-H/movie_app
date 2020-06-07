import React from 'react';
import axios from 'axios';
import Dump from '../components/Dump';
import './About.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dump: [],
    };
  }

  getDumps = async () => {
    const { data } = await axios.get('https://api.tronalddump.io/random/quote');
    this.setState({ isLoading: false, dump: data });
  };

  componentDidMount() {
    this.getDumps();
  }

  render() {
    return (
      <section className="container">
        {this.state.isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...🏃‍♂️</span>
          </div>
        ) : (
          <div className="dumps">
            <Dump
              value={this.state.dump.value}
              at={this.state.dump.appeared_at}
            />
          </div>
        )}
      </section>
    );
  }
}

export default About;
