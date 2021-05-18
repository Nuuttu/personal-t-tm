import react, { useState } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";


export default function TrainerCalendar(props) {

  const localizer = momentLocalizer(moment);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Event Calendar
      </Typography>


      <div>
        <Calendar
          localizer={localizer}
          events={props.allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 800}}
        />
      </div>


    </div>
  );
}