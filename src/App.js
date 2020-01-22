import React from 'react';
import Header from './component/Header';
import About from './component/About';
import ContactMe from './component/ContactMe';
import "./index.css"
import ClassComponent from './component/ClassComponent';
import FunctionComponent from './component/FunctionComponent';
import Counter from './component/Counter'

function App() {
  return (
    <div>
      <Header />
      <main className="profilePicture">
        <img src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png" alt="Profile" className="profileImage"></img>
      </main>
      <h2 className="aboutMe">About Me</h2>
      <About />
      <About />
      <ClassComponent />
      <FunctionComponent />
      <br></br>
    <div>
      <Counter />
    </div>
      <ContactMe />
    </div>
  );
}

export default App;
