import React, { Component } from 'react'
import CountDown from '../Countdown/Countdown'
import moment from 'moment';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      currentDay: ''
    }
  }
  componentDidMount() {
    let currentDay = moment().format('MMMM Do YYYY');
    this.setState({ currentDay })
    this.goColor()
  }

  goColor() {
    window.addEventListener('mousemove', function(e) {
      [1, .9, .8, .5, .1].forEach(function(i) {
        var j = (1 - i) * 50;
        var elem = document.createElement('div');
        var size = Math.ceil(Math.random() * 10 * i) + 'px';
        elem.style.position = 'fixed';
        elem.style.top = e.pageY + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.width = size;
        elem.style.height = size;
        elem.style.background = 'hsla(' +
          Math.round(Math.random() * 360) + ', ' +
          '100%, ' +
          '50%, ' +
          i + ')';
        elem.style.borderRadius = size;
        elem.style.pointerEvents = 'none';
        document.body.appendChild(elem);
        window.setTimeout(function() {
          document.body.removeChild(elem);
        }, Math.round(Math.random() * i * 500));
      });
    }, false);
  }

  render() {
    return(
      <div>
        <div className='current-day'>{this.state.currentDay}</div>
        <div className='title'>DOUG SUMMER LAST CHANCE PARTY</div>
        <CountDown />
      </div>
    )
  }
}
