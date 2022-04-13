import { useState } from 'react';
import './About.scss';

const About = () => {
  const [name, setName] = useState('Le Thanh Phuoc');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="about">
      {/* <input
        placeholder="Enter your name"
        type="text"
        onChange={(event) => setName(event.target.value)}
      />
      <h1>My name is: {name}</h1> */}

      <h1>{name}</h1>

      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Change name
      </button>

      {isOpen && (
        <input type="text" onChange={(event) => setName(event.target.value || 'Your Name')}></input>
      )}
    </div>
  );
};


export default About;
