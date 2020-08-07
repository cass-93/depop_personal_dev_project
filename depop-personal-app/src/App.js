import React from 'react';

import Logo from './components/Logo/Logo';
import MainContainer from './components/ShopContainer/MainContainer';
import UserDetails from './components/UserDetails/UserDetailsContainer';
import Avatar from './components/Avatar/Avatar';

import './App.css';

function App() {
  return (
    <React.Fragment>
    <header className="Main-head">
      <div className="Container-for-head">
        <Logo />
      </div>
    </header>
    
    <MainContainer>
      <UserDetails>
        <Avatar />
      </UserDetails>
    </MainContainer>

    </React.Fragment>
  );
}

export default App;
