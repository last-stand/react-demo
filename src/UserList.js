import React from 'react';

class UserList extends React.Component{
  render() {
    let chunkedUsers = splitIntoHalf(this.props.users);
    return (
        <div className='parent'>
          <Table userList={chunkedUsers[0]}/>
          <Table userList={chunkedUsers[1]}/>
        </div>
    );
  }
}

function Table(props) {
  return (
    <div className="div-table">
      <TableHeader />
      {props.userList.map(user => (
        <UserRecord key={user.login} user={user}/>
      ))}
    </div>
  );
}

function TableHeader() {
  return (
    <div className="div-table-row div-table-header">
      <div  className="div-table-col">Name</div>
      <div  className="div-table-col">UserId</div>
    </div>
  );
}

function UserRecord(props) {
  return (
    <div className="div-table-row">
      <div className="div-table-col">{props.user.firstname} {props.user.lastname}</div>
      <div className="div-table-col">{props.user.login}</div>
    </div>
  );
}

function splitIntoHalf(array){
  let half_length = Math.ceil(array.length / 2);
  let results = [];
  let left = array.splice(0, half_length);
  let right = array;
  results.push(left, right);
  return results;
}

export default UserList;
