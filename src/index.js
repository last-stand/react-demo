import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './UserList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/user/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result" + result);
          this.setState({
            isLoaded: true,
            users: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, users } = this.state;
    console.log(this.state);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <UserList users={users}/>
      );
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
