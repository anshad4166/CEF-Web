import React from 'react';
import { Calendar } from "@/components/ui/calendar";

const EventCalendar = () => {
  const [date, setDate] = React.useState(new Date());

  // Mock events data
  const events = [
    { date: new Date(2024, 3, 15), title: "Community Meetup" },
    { date: new Date(2024, 3, 22), title: "Tech Workshop" },
    { date: new Date(2024, 4, 5), title: "Networking Event" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Event Calendar</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="bg-white p-4 rounded-md shadow">
                <p className="font-semibold">{event.title}</p>
                <p className="text-gray-600">{event.date.toDateString()}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;