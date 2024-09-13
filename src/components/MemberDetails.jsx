import React from 'react';
import { ExternalLink } from 'lucide-react';

const MemberDetails = ({ member }) => {
  return (
    <div className="p-4">
      <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
      <p className="text-gray-600 mb-4">{member.title}</p>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Contact Information:</h3>
        <p>Email: {member.email}</p>
        <p>Phone: {member.phone}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Social Media:</h3>
        <ul>
          {member.socialMedia.map((social, index) => (
            <li key={index} className="flex items-center mb-1">
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                {social.platform} <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {member.portfolio && (
        <div>
          <h3 className="font-semibold mb-2">Portfolio:</h3>
          <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
            View Portfolio <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      )}
    </div>
  );
};

export default MemberDetails;