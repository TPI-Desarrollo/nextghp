import Calendar from 'react-calendar';

import React, { useState } from 'react';
import { differenceInCalendarDays } from 'date-fns';
import { prefix } from '../utils/prefix.js';

import styled from 'styled-components'
import events from '../public/data/calendarEvents'


const isSameDay = (a, b) => {
  return differenceInCalendarDays(a, b) === 0;
}
const tileClassName = ({ date, view }) => {
  if (view === 'month') 
    if (events.find(dDate => 
      isSameDay(dDate[0], date))) 
      return 'calendar-event';
}

const Container = styled.div`
  position: relative;
  height: 240px;
  width: 100%;
  display: flex;
  justify-content: center;
`
const Event = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
  background-color: #1920EF;
  color: white;
  width: 100%;
  height: ${p => p.active ? '100%' : '0'};
  z-index: 3;
  transition: .3s ease;
`
const Close = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  transition: .3s ease;

  :hover{
    transform: scale(1.2);
  }
`
const Title = styled.h2`
  margin: 0;
`
const DateT = styled.h3`
  margin: 0;
`

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
    <Container>
      <Event active={selected}>
        {selected
          ? <>
            <DateT>
              {selected[0].getDate()}-
              {selected[0].getMonth()}-
              {selected[0].getFullYear()}
            </DateT>
            <Title>{selected[1]}</Title>
            <Close onClick={erase} src={`${prefix}/imgs/exit.png`}/>
            </>
          : null
        }
      </Event>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={tileClassName}
        locale="es"
      />
    </Container>
  );
}

export default Cal
