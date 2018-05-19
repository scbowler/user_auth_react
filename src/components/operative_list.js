import React from 'react';
import auth from '../hoc/auth';

const OpList = props => (
    <div>
        <h1 className="center">Secret Operative List</h1>
        <ol>
            <li>Corey</li>
            <li>Sarah</li>
            <li>Steve</li>
            <li>Samantha</li>
            <li>George</li>
            <li>Heather</li>
            <li>Leon</li>
            <li>Martha</li>
        </ol>
    </div>
);

export default auth(OpList);
