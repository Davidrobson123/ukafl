import React, {Component} from 'react';
import '../../App.scss';

export default class LatestPosts extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="posts">
        <h1 className="text-size-50"><b>Latest Posts</b></h1>
        <div className="posts-grid">
          <div className='row'>
            <div className='column'>
              <div className='flex-item'>
                <div>Rooney Joins UKAFL team</div>
                <div className="post-content">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras a est nec metus vestibulum luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eu nulla vitae risus gravida condimentum semper quis turpis. Donec ipsum est, elementum a purus et, pretium dignissim augue. In sit amet ipsum tempor, fringilla justo vel, egestas ex. Curabitur bibendum felis in tellus vehicula tincidunt. Pellentesque nisi urna, condimentum eu nisl in, egestas finibus ante.
                </div>
              </div>
              <div className='flex-item'>
                <div>Rooney Joins UKAFL team</div>
                <div className="post-content">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras a est nec metus vestibulum luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eu nulla vitae risus gravida condimentum semper quis turpis. Donec ipsum est, elementum a purus et, pretium dignissim augue. In sit amet ipsum tempor, fringilla justo vel, egestas ex. Curabitur bibendum felis in tellus vehicula tincidunt. Pellentesque nisi urna, condimentum eu nisl in, egestas finibus ante.
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='flex-item'>
                <div>Rooney Joins UKAFL team</div>
                <div className="post-content">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras a est nec metus vestibulum luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eu nulla vitae risus gravida condimentum semper quis turpis. Donec ipsum est, elementum a purus et, pretium dignissim augue. In sit amet ipsum tempor, fringilla justo vel, egestas ex. Curabitur bibendum felis in tellus vehicula tincidunt. Pellentesque nisi urna, condimentum eu nisl in, egestas finibus ante.
                </div>
              </div>
              <div className='flex-item'>
                <div>Rooney Joins UKAFL team</div>
                <div className="post-content">
                  Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras a est nec metus vestibulum luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eu nulla vitae risus gravida condimentum semper quis turpis. Donec ipsum est, elementum a purus et, pretium dignissim augue. In sit amet ipsum tempor, fringilla justo vel, egestas ex. Curabitur bibendum felis in tellus vehicula tincidunt. Pellentesque nisi urna, condimentum eu nisl in, egestas finibus ante.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}