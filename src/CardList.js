import React from 'react';
import App from './App';

function CardList ({robots}){
  const cardArray = robots.map((user,i) => {return <App key={i} id={robots[i].id} name = {robots[i].name} email = {robots[i].email}/>} )
  return (
    <div>
     {cardArray}
    </div>
  );
}

export default CardList;