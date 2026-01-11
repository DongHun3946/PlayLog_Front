import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  const handleDateClick = (info) => {
    console.log("클릭한 일자 : ", info.dateStr);
  };

  const handleEventClick = (info) => {
    console.log("이벤트 클릭", info);
  };

  const events = [
    {title: "게임1", date: "2026-01-10"},
    {title: "게임2", date: "2026-01-11"}
  ];

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      locale="ko"
      events={events}
      dateClick={handleDateClick}
      eventClick={handleEventClick}
      weekends={true}
      height="auto"
    />
  )
}
export default Calendar;