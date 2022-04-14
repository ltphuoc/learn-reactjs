import { useState } from 'react';
import './About.scss';

const About = () => {
  const [name, setName] = useState('Le Thanh Phuoc');
  const [isOpen, setIsOpen] = useState(false);

  const foodList = ['Phở', 'Cơm tấm', 'Bánh mì', 'Bánh giò', 'Yến mạch', 'Xôi', 'Bún thịt nướng'];
  const [food, setFood] = useState('');
  return (
    <div className="about">
      <div className="about__name">
        <h1>{name}</h1>

        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          Change name
        </button>

        {isOpen && (
          <input
            type="text"
            onChange={(event) => setName(event.target.value || 'Your Name')}
          ></input>
        )}
      </div>
      <div className="about__random-food">
        <h2>{food || 'Hôm nay sẽ ăn'}</h2>
        <button
          type="button"
          onClick={() => {
            setFood(foodList[Math.floor(Math.random() * foodList.length)]);
          }}
        >
          Ăn gì nào
        </button>
      </div>
    </div>
  );
};

export default About;
