import React, { useMemo } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, addDays } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarWorkspace.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarWorkspace({ classes = [], notices = [], assignments = [] }) {
  const events = useMemo(() => {
    return [
      ...classes.map(c => {
        let startDate = new Date();
        return {
          title: `Class: ${c.title} (${c.room})`,
          start: startDate,
          end: addDays(startDate, 0),
          allDay: false,
          resource: c
        };
      }),
      ...notices.map(n => ({
        title: `Notice: ${n.title}`,
        start: new Date(n.publishDate || n.createdAt || Date.now()),
        end: new Date(n.publishDate || n.createdAt || Date.now()),
        allDay: true,
        resource: n
      })),
      ...assignments.map(a => ({
        title: `Assignment Due: ${a.title}`,
        start: new Date(a.dueDate || Date.now()),
        end: new Date(a.dueDate || Date.now()),
        allDay: true,
        resource: a
      }))
    ];
  }, [classes, notices, assignments]);

  return (
    <section className="role-view" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 110px)', boxSizing: 'border-box' }}>
      <div className="calendar-wrapper">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ flex: 1, height: '100%' }}
          views={['month', 'week', 'day']}
          defaultView="month"
          eventPropGetter={(event) => {
            let backgroundColor = '#3b82f6'; // class blue
            if (event.title.startsWith('Notice')) backgroundColor = '#f59e0b'; // notice amber
            if (event.title.startsWith('Assignment')) backgroundColor = '#8b5cf6'; // assignment violet
            return { style: { backgroundColor } };
          }}
        />
      </div>
    </section>
  );
}
