import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { differenceInCalendarDays } from 'date-fns';

import styled from 'styled-components'


const events = [
  [new Date(2021, 11, 10), 'evento1'],
  [new Date(2021, 11, 12), 'evento2']
]

const isSameDay = (a, b) => {
  return differenceInCalendarDays(a, b) === 0;
}
const tileClassName = ({ date, view }) => {
  if (view === 'month') 
    if (events.find(dDate => 
      isSameDay(dDate[0], date))) 
      return 'calendar-event';
}

const Cal = () => {
  const [value, setValue] = useState(null);
  const onChange = (nextValue) => {
    setValue(nextValue)
  }
  const erase = () => {
    setValue(null)
  }
  const selected = events.find(e => 
    e[0]?.getTime() === value?.getTime())

  return (
    <div>
      {selected
        ? <div>
            {selected[1]}
          <button onClick={erase}>
            cerrar
          </button>
          </div>
        : <Calendar
            onChange={onChange}
            value={value}
            tileClassName={tileClassName}
          />
      }
    </div>
  );
}

export default Cal
