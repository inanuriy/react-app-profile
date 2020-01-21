import React from 'react';
import Header from './component/Header';
import About from './component/About';
import ContactMe from './component/ContactMe';
import "./index.css"

function App() {
  return (
    <div>
      <Header />
      <main className="profilePicture">
        <img src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png" alt="image" class="profileImage"></img>
      </main>
      <h2 className="aboutMe">About Me</h2>
      <About />
      <About />

      <ContactMe />
    </div>
  );
}

export default App;
