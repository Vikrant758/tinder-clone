import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import database from "./firebase";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unSubscribe = database.collection('people').onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data())));

        return () =>{
            unSubscribe();
        }
    }, [])

    // const swiped = (direction, nameToDelete)=>{
    //     console.log("Removing:" + nameToDelete);
    //     // setLastDirection(direction);
    // };

    // const outOfFrame = (name) =>{
    //     console.log(name + 'left the screen');
    // }
    return (
        <div className="tinderCards">
            <div className="tinderCardsContainer">
                {people.map((person) => (
                    // <h1>{person.name}</h1>
                    <TinderCard
                        className='swipe'
                        key={person.name}
                    // preventSwipre={['up', 'down']}
                    // onSwipe={(dir) => swiped(dir, person.name)}
                    // onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
