import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Filter } from 'lucide-react';

const FilterButton = ({ options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option];
    onChange(updatedOptions);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          <Filter className="mr-2 h-4 w-4" />
          {selectedOptions.length > 0 ? `${selectedOptions.length} selected` : 'Filter'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <div className="p-4">
          {options.map((option) => (
            <div key={option} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={option}
                checked={selectedOptions.includes(option)}
                onCheckedChange={() => handleCheckboxChange(option)}
              />
              <Label htmlFor={option}>{option}</Label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterButton;