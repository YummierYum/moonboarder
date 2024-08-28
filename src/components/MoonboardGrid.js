import React from 'react';

var startCount = 0;
var endCount = 0;

const MoonboardGrid = ({}) => {
    const cells = new Array(11).fill(0);
    const rows = new Array(18).fill(0);

    const handleClick = (e) => {
        const hold = e.target;

        if (hold.classList.contains('intermediate')) {
            hold.classList.remove('intermediate');
            if (endCount < 1) {
                hold.classList.add('end');
                endCount++;
            }
        } else if (hold.classList.contains('end')){
            hold.classList.remove('end');
            endCount--;
        } else if (hold.classList.contains('start')){
            hold.classList.remove('start');
            startCount--;
            hold.classList.add('intermediate');
        } else {
            if (startCount < 2) {
                hold.classList.add('start');
                startCount++;
            } else {
                hold.classList.add('intermediate');
            }
        }
    }


return (
    <main>

        {rows.map((row, index) => (
        <ul className="row" key={index}>
          {cells.map((cell, index) => (
            <li key={index} className="hold" onClick={handleClick} />
          ))}
        </ul>
      ))}
    </main>
);};

export default MoonboardGrid;