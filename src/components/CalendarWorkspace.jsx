import React, { useMemo } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, addDays } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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
        // In a real application, dbClasses should store actual Date objects.
        // For now, we default to today to ensure they show up on the calendar visually.
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
    <section className="role-view" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 'calc(100vh - 80px)', boxSizing: 'border-box' }}>
      <div style={{ flexShrink: 0, marginBottom: '24px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Global Calendar</h2>
        <p style={{ color: '#64748b' }}>View all scheduled classes, notices, and upcoming assignments in one place.</p>
      </div>
      <div style={{ flex: 1, background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid var(--line)', minHeight: '600px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ flex: 1, height: '100%', fontFamily: 'inherit' }}
          views={['month', 'week', 'day']}
          defaultView="month"
          eventPropGetter={(event) => {
            let backgroundColor = '#3b82f6'; // class blue
            if (event.title.startsWith('Notice')) backgroundColor = '#f59e0b'; // notice amber
            if (event.title.startsWith('Assignment')) backgroundColor = '#8b5cf6'; // assignment violet
            return { style: { backgroundColor, borderRadius: '4px', border: 'none', fontWeight: 500, padding: '4px' } };
          }}
        />
      </div>
    </section>
  );
}
