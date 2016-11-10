'use strict';

import React from 'react';

export default React.createClass({
  render() {
    return (
      <h1>
        节目内容 {this.props.params.id}
      </h1>
    )
  }
});
