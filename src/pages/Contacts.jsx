import React, { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { communityMembers } from '../mockData';
import MemberDetails from '../components/MemberDetails';
import FilterButton from '../components/FilterButton';
import { Button } from "@/components/ui/button";
import { Grid, List, LayoutGrid } from 'lucide-react';
import { motion } from "framer-motion";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedProfessions, setSelectedProfessions] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  const uniqueProfessions = useMemo(() => [...new Set(communityMembers.map(member => member.title))], []);
  const uniqueCompanies = useMemo(() => [...new Set(communityMembers.map(member => member.company))], []);
  const uniqueLocations = useMemo(() => [...new Set(communityMembers.map(member => member.location || 'Unknown'))], []);

  const filteredMembers = useMemo(() => {
    return communityMembers.filter(member =>
      (member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.phone.includes(searchTerm)) &&
      (selectedProfessions.length === 0 || selectedProfessions.includes(member.title)) &&
      (selectedCompanies.length === 0 || selectedCompanies.includes(member.company)) &&
      (selectedLocations.length === 0 || selectedLocations.includes(member.location || 'Unknown'))
    );
  }, [searchTerm, selectedProfessions, selectedCompanies, selectedLocations]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Community Members</h1>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Input
          type="text"
          placeholder="Search by name, profession, company, or phone number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <FilterButton
          options={uniqueProfessions}
          selectedOptions={selectedProfessions}
          onChange={setSelectedProfessions}
        />
        <FilterButton
          options={uniqueCompanies}
          selectedOptions={selectedCompanies}
          onChange={setSelectedCompanies}
        />
        <FilterButton
          options={uniqueLocations}
          selectedOptions={selectedLocations}
          onChange={setSelectedLocations}
        />
      </div>
      <div className="flex justify-end mb-4 space-x-2">
        <Button variant={viewMode === 'grid' ? 'default' : 'outline'} onClick={() => setViewMode('grid')}><Grid className="h-4 w-4" /></Button>
        <Button variant={viewMode === 'list' ? 'default' : 'outline'} onClick={() => setViewMode('list')}><List className="h-4 w-4" /></Button>
        <Button variant={viewMode === 'compact' ? 'default' : 'outline'} onClick={() => setViewMode('compact')}><LayoutGrid className="h-4 w-4" /></Button>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`grid gap-4 ${
          viewMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            : viewMode === 'list'
            ? 'grid-cols-1'
            : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
        }`}
      >
        {filteredMembers.map(member => (
          <motion.div key={member.id} variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className={`p-4 ${viewMode === 'compact' ? 'text-sm' : ''}`}>
                {viewMode !== 'compact' && (
                  <img src={member.avatar} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                )}
                <h2 className={`font-semibold mb-2 ${viewMode === 'compact' ? 'text-base' : 'text-xl'}`}>{member.name}</h2>
                <p className="text-gray-600 mb-2">{member.title}</p>
                {viewMode !== 'compact' && (
                  <p className="text-gray-500 mb-4">{member.company}</p>
                )}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button onClick={() => setSelectedMember(member)} className="w-full">View Details</Button>
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Contacts;
