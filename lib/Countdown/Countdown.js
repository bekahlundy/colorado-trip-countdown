import React, { Component } from 'react';
import moment from 'moment'
import momentCountdown from 'moment-countdown';

export default class CountDown extends Component {
  constructor() {
    super()
    this.state = {
      arrival: '',
      timeDiff: ''
    }
  }
  getArrival() {
    let arrival = moment('2017-08-25').format('MMMM Do YYYY');
    this.setState({arrival})
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({timeDiff: moment("2017-08-25").countdown().toString()}), 1000);
    this.getArrival()
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div>
        <div className='arrival-day'>{this.state.arrival}</div>
        <div className='hamster-img'>
          <img className='img-ham' src='./lib/Countdown/hamster.gif' alt='hamster' />
        </div>
        <div className='countdown'>{this.state.timeDiff}</div>
      </div>
    )
  }
}
