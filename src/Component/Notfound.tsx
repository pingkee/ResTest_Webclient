import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
        <h1>
            404: PAGE NOT FOUND ! 
            <Link to="/termsandcondition">Terms And Condition</Link>
        </h1>
    </div>
  )
};

export default Notfound;
