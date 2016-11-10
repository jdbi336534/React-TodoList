'ure strict';

import React from 'react';

// import router
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <div>
          <Link to="/">首页</Link> | 
          <Link to="/tv">电视剧</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
});
