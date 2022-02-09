import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const[people, setPeople] = useState([
        {
            name: 'steve jobs',
            url : 'https://i.insider.com/5d4dbba92eaed53f8f5b9e95?width=1136&format=jpeg'
        },
        {
            name: 'elon musk',
            url: 'https://image.cnbcfm.com/api/v1/image/105318483-1531153006021gettyimages-872508684.jpg?v=1562101726&w=720&h=405'
        }
    ]);

  return (
    <div>
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