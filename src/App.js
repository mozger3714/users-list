import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {

  const [users, setUsers]= useState([])
  const [invites, setInvites]= useState([])
  const [isLoading, setIsLoading]= useState(true)
  const [inviteSent, setInviteSent]= useState(false)
  const [searchValue, setSearchValue]= useState('')

  useEffect(()=> {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json.data)
    }).catch(err => {
      console.warn(err)
      alert('an error has aqquired')
    }).finally(() => setIsLoading(false))
  }, [])

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }
  
  const onClickInvite = (id) => {
    if(invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id != id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  const sendInvitesHandler = () => {
    setInviteSent(true)
  }

  return (
    <div className="App">
      { 
        inviteSent ? <Success count={invites.length}/> : (
          <Users 
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue} 
          items={users} 
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          sendInvitesHandler={sendInvitesHandler}
          />
        )
      }
     
     
    </div>
  );
}

export default App;
