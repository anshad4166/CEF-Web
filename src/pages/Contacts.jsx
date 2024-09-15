import React, { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { communityMembers } from '../mockData';
import MemberDetails from '../components/MemberDetails';

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [professionFilter, setProfessionFilter] = useState('all');
  const [companyFilter, setCompanyFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const uniqueProfessions = useMemo(() => ['all', ...new Set(communityMembers.map(member => member.title))], []);
  const uniqueCompanies = useMemo(() => ['all', ...new Set(communityMembers.map(member => member.company))], []);
  const uniqueLocations = useMemo(() => ['all', ...new Set(communityMembers.map(member => member.location || 'Unknown'))], []);

  const filteredMembers = useMemo(() => {
    return communityMembers.filter(member =>
      (member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.phone.includes(searchTerm)) &&
      (professionFilter === 'all' || member.title === professionFilter) &&
      (companyFilter === 'all' || member.company === companyFilter) &&
      (locationFilter === 'all' || (member.location || 'Unknown') === locationFilter)
    );
  }, [searchTerm, professionFilter, companyFilter, locationFilter]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Community Members</h1>
      <div className="mb-4 flex flex-wrap gap-4">
        <Input
          type="text"
          placeholder="Search by name, profession, company, or phone number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={professionFilter} onValueChange={setProfessionFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by Profession" />
          </SelectTrigger>
          <SelectContent>
            {uniqueProfessions.map((profession) => (
              <SelectItem key={profession} value={profession}>{profession === 'all' ? 'All Professions' : profession}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={companyFilter} onValueChange={setCompanyFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by Company" />
          </SelectTrigger>
          <SelectContent>
            {uniqueCompanies.map((company) => (
              <SelectItem key={company} value={company}>{company === 'all' ? 'All Companies' : company}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={locationFilter} onValueChange={setLocationFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by Location" />
          </SelectTrigger>
          <SelectContent>
            {uniqueLocations.map((location) => (
              <SelectItem key={location} value={location}>{location === 'all' ? 'All Locations' : location}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMembers.map(member => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
              <p className="text-gray-600 mb-2">{member.title}</p>
              <p className="text-gray-500 mb-4">{member.company}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => setSelectedMember(member)}>View Details</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
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
