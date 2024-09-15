import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { fetchEvents, createEvent } from '../api';

const EventCalendar = () => {
  const [date, setDate] = React.useState(new Date());
  const queryClient = useQueryClient();

  const { data: events, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });

  const createEventMutation = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries(['events']);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleCreateEvent = () => {
    // This is a placeholder. You would typically open a form to input event details.
    const newEvent = {
      date: new Date(),
      title: "New Event",
    };
    createEventMutation.mutate(newEvent);
  };

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
          <Button onClick={handleCreateEvent} className="mb-4">Create New Event</Button>
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="bg-white p-4 rounded-md shadow">
                <p className="font-semibold">{event.title}</p>
                <p className="text-gray-600">{new Date(event.date).toDateString()}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
