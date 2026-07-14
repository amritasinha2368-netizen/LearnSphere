  function renderCalendar() {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStarts: 1 }); // Monday start
    const endDate = endOfWeek(monthEnd, { weekStarts: 1 });

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const dayEvents = dbEvents.filter(e => isSameDay(parseISO(e.date), cloneDay));
        
        let colorClass = "muted"; // Default out of month
        if (isSameMonth(day, monthStart)) {
          if (dayEvents.some(e => e.type === 'alert')) colorClass = "red";
          else if (dayEvents.some(e => e.type === 'deadline')) colorClass = "amber";
          else if (dayEvents.some(e => e.type === 'event')) colorClass = "blue";
          else colorClass = "green";
        }

        days.push(
          <button 
            className={`calendar-day ${colorClass}`} 
            type="button" 
            key={day} 
            onClick={() => setAction({ type: 'add-event', title: 'Add Event', date: format(cloneDay, 'yyyy-MM-dd'), kicker: 'Calendar', primaryLabel: 'Save' })}
          >
            {formattedDate}
            {dayEvents.length > 0 && <div style={{ fontSize: '10px', marginTop: '4px', color: '#1e293b' }}>{dayEvents[0].title}</div>}
          </button>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className="calendar-grid" key={day} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px' }}>{days}</div>);
      days = [];
    }

    return (
      <section className="role-view">
        {sectionTitle("Institution Calendar", "Monthly activity overview for classes, deadlines, and system events.")}
        <div className="calendar-shell">
          <article className="panel calendar-panel">
            <div className="calendar-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2>{format(currentMonth, "MMMM yyyy")}</h2>
                <span>Click any date to mark an event.</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="panel-button" onClick={prevMonth} style={{ padding: '8px' }}><ChevronLeft size={20} /></button>
                <button className="panel-button" onClick={nextMonth} style={{ padding: '8px' }}><ChevronRight size={20} /></button>
              </div>
            </div>
            <div className="calendar-weekdays" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: '8px' }}>
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => <b key={d} style={{ color: '#64748b' }}>{d}</b>)}
            </div>
            <div style={{ background: '#e2e8f0', border: '1px solid #e2e8f0' }}>
              {rows}
            </div>
          </article>
          <article className="panel calendar-stats">
            {[
              ["Total Events", dbEvents.length.toString()],
              ["Alerts", dbEvents.filter(e => e.type === 'alert').length.toString()],
              ["Deadlines", dbEvents.filter(e => e.type === 'deadline').length.toString()],
            ].map(([label, value]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </article>
        </div>
      </section>
    );
  }