import React from 'react';
function Gate(props){
return (
    <div>
        <h3>Result of Gate component {props.isOpen=='true' ?'OPEN':'CLOSE'}</h3>
    </div>
);
}
export default Gate;