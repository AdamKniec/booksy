import React  from 'react';

const Intro = props => {
    return(
      <div>
        <h1>{props.appName}</h1>
        <p>Kazda strona jest przygodą</p>
        <p>Nie chcesz ich zapomnieć</p>
      </div>
    )
  }
export default Intro;