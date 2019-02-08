import React  from 'react';
import '../styles/app.scss';

const Intro = props => {
    return(
      <div className="intro">
        <h1>{props.appName}</h1>
        <p>Kazda strona jest przygodą</p>
        <p>Nie chcesz ich zapomnieć</p>
      </div>
    )
  }
export default Intro;