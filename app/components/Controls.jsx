var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary " onClick={this.onStatusChange('paused')}><i className="fa fa-pause fa-3x" aria-hidden="true"></i></button>
      } else {
        return <button className="button primary" onClick={this.onStatusChange('started')}><i className="fa fa-play fa-3x" aria-hidden="true"></i></button>
      }
    };

    return (

      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert" onClick={this.onStatusChange('stopped')}>CLEAR</button>
      </div>
    )
  }
});

module.exports = Controls;
