import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const[people, setPeople] = useState([
        {
            name: 'steve jobs',
            url : 'https://images.frandroid.com/wp-content/uploads/2021/10/steve-jobs-with-imac-g3-blue.jpeg'
        },
        {
            name: 'elon musk',
            url: 'https://www.presse-citron.net/app/uploads/2019/10/elonmusk-e1611101293534.jpg'
        }
    ]);

  return (
    <div className='card-container'>
        <h1>tinder cards</h1>

        {people.map(person => (
            <TinderCard className='swipe' key={person.name} preventSwipe={['up', 'down']}>
                <div className='card' style={{ backgroundImage:`url(${person.url})` }}>
                    <h3>{person.name}</h3>
                   
                </div>
            </TinderCard>
        ))}
    </div>
  )
}

export default TinderCards