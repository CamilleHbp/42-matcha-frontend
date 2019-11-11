import React, { useState } from 'react';
import SingleInput from './SingleInput';
import postUser from '../domain/use-cases/postUser';
import './CreateUser.scss';

export function CreateUSer() {
  const initialUser = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: ''
  };

  const [username, setUsername] = useState(initialUser.username);
  const [password, setPassword] = useState(initialUser.password);
  const [firstname, setFirstname] = useState(initialUser.firstname);
  const [lastname, setLastname] = useState(initialUser.lastname);
  const [email, setEmail] = useState(initialUser.email);

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  const handleFirstnameChange = event => {
    setFirstname(event.target.value);
  };
  const handleLastnameChange = event => {
    setLastname(event.target.value);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const clearForm = () => {
    setUsername(initialUser.username);
    setPassword(initialUser.password);
    setFirstname(initialUser.firstname);
    setLastname(initialUser.lastname);
    setEmail(initialUser.email);
  };

  const submitUser = event => {
    console.log('An user was submitted: ' + username);
    clearForm();
    postUser({
      username,
      password,
      firstname,
      lastname,
      email
    });
    // response.then(ok => {
    //   if (ok) {
    //     console.log('User created');
    //   } else {
    //     console.log('Could not create user');
    //   }
    // });
    event.preventDefault();
  };

  return (
    <form className="create-user-form" onSubmit={submitUser}>
      <SingleInput
        label="Username"
        type="text"
        name="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <SingleInput
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <SingleInput
        label="Firstname"
        type="text"
        name="firstname"
        value={firstname}
        onChange={handleFirstnameChange}
      />
      <SingleInput
        label="Lastname"
        type="text"
        name="lastname"
        value={lastname}
        onChange={handleLastnameChange}
      />
      <SingleInput
        label="Email"
        type="text"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className="create-user-form-submit"
        type="submit"
        value="Create user"
        onSubmit={submitUser}
      />
    </form>
  );
}

export default CreateUSer;
