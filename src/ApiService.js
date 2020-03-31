import React from 'react';
import ViewService from './ViewService';
import 'bootstrap/dist/css/bootstrap.min.css';

class ApiService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.api.url,
      method: props.api.method,
      error: null,
      isLoaded: false,
      items: []
    };
    this.apiCall = this.apiCall.bind(this);
  }

  apiCall() {
    fetch(this.state.url, {
      method: this.state.method,
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      console.log(items);
      return <div>Exception: {error.message}</div>
    } else {
      return (
        <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Della</h5>
              <button onClick={this.apiCall}>Get info</button>
              <ViewService items = {items}/>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ATI</h5>
              <button onClick={this.apiCall}>Get info</button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Lardi-Trans</h5>
              <button onClick={this.apiCall}>Get info</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ApiService;
