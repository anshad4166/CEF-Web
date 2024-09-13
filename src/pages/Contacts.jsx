import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { communityMembers } from '../mockData';
import MemberDetails from '../components/MemberDetails';

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredMembers = communityMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Community Members</h1>
      <Input
        type="text"
        placeholder="Search members..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMembers.map(member => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
              <p className="text-gray-600 mb-4">{member.title}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => setSelectedMember(member)}>View Details</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{member.name}</DialogTitle>
                  </DialogHeader>
                  <MemberDetails member={member} />
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Contacts;