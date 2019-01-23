import React from 'react';

class UserList extends React.Component{
  render() {
    let chunkedUsers = splitIntoHalf(this.props.users);
    return (
        <div class='parent'>
          <Table userList={chunkedUsers[0]}/>
          <Table userList={chunkedUsers[1]}/>
        </div>
    );
  }
}

function Table(props) {
  return (
    <div class="div-table">
      <TableHeader />
      {props.userList.map(user => (
        <UserRecord user={user}/>
      ))}
    </div>
  );
}

function TableHeader() {
  return (
    <div class="div-table-row div-table-header">
      <div  class="div-table-col">Name</div>
      <div  class="div-table-col">UserId</div>
    </div>
  );
}

function UserRecord(props) {
  return (
    <div class="div-table-row">
      <div class="div-table-col">{props.user.firstname} {props.user.lastname}</div>
      <div class="div-table-col">{props.user.login}</div>
    </div>
  );
}

function splitIntoHalf(array){
  let half_length = Math.ceil(array.length / 2);
  let results = [];
  let left = results.push(array.splice(0, half_length));
  let right = results.push(array);
  return results;
}

export default UserList;
