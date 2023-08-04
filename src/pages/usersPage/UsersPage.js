import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from '../../components/User';
import { addUser, changeInput, clearUsers, deleteAllUsers } from '../../store/usersSlice';

function UsersPage() {
  const dispatch = useDispatch();
  const { inputValue, users } = useSelector(state => state.usersReducer);
  const [localInputValue, setLocalInputValue] = useState('');

  const changeInputFunc = (event) => {
    dispatch(changeInput(event.target.value));
    setLocalInputValue(event.target.value);
  }

  const addUserFunc = () => {
    dispatch(addUser(inputValue));
    setLocalInputValue('');
  }

  const clearUsersFunc = () => {
    setLocalInputValue('');
  }

  const deleteAllUsersFunc = () => {
    dispatch(deleteAllUsers());
  }

  return (
    <>
      <input type="text" placeholder="name" value={localInputValue} onChange={changeInputFunc} />
      <button onClick={addUserFunc}>add user</button>

      {users.map((user, index) => <User key={index} name={user} />)}
      <button onClick={clearUsersFunc}>clear</button>
      <button onClick={deleteAllUsersFunc}>delete all</button>
    </>
  );
}

export default UsersPage;
