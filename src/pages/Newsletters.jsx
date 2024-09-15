import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { fetchNewsletters, createNewsletter } from '../api';

const Newsletters = () => {
  const queryClient = useQueryClient();

  const { data: newsletters, isLoading, error } = useQuery({
    queryKey: ['newsletters'],
    queryFn: fetchNewsletters,
  });

  const createNewsletterMutation = useMutation({
    mutationFn: createNewsletter,
    onSuccess: () => {
      queryClient.invalidateQueries(['newsletters']);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleCreateNewsletter = () => {
    // This is a placeholder. You would typically open a form to input newsletter details.
    const newNewsletter = {
      title: "New Newsletter",
      date: new Date().toISOString(),
    };
    createNewsletterMutation.mutate(newNewsletter);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Newsletters</h1>
      <Button onClick={handleCreateNewsletter} className="mb-4">Create New Newsletter</Button>
      <div className="grid gap-6">
        {newsletters.map((newsletter) => (
          <div key={newsletter.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{newsletter.title}</h2>
            <p className="text-gray-600 mb-4">{new Date(newsletter.date).toDateString()}</p>
            <Button>Read Newsletter</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletters;
