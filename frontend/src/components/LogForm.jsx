import { useState } from 'react';
import API from '../services/api';

const LogForm = ({ studentId, onLogAdded }) => {
  const [formData, setFormData] = useState({ date: '', company: '', taskDescription: '', skillsUsed: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/logs', { ...formData, studentId, skillsUsed: formData.skillsUsed.split(',') });
      onLogAdded();
      setFormData({ date: '', company: '', taskDescription: '', skillsUsed: '' });
    } catch (error) {
      console.error("Error adding log:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-darkBlue-800 p-6 rounded-lg border border-darkBlue-700">
      <input type="date" className="w-full p-2 mb-2 bg-darkBlue-900 border border-darkBlue-600 rounded text-white" onChange={e => setFormData({...formData, date: e.target.value})} required />
      <input type="text" placeholder="Company Name" className="w-full p-2 mb-2 bg-darkBlue-900 border border-darkBlue-600 rounded text-white" onChange={e => setFormData({...formData, company: e.target.value})} required />
      <textarea placeholder="Task Description" className="w-full p-2 mb-2 bg-darkBlue-900 border border-darkBlue-600 rounded text-white" onChange={e => setFormData({...formData, taskDescription: e.target.value})} required />
      <input type="text" placeholder="Skills (comma separated)" className="w-full p-2 mb-4 bg-darkBlue-900 border border-darkBlue-600 rounded text-white" onChange={e => setFormData({...formData, skillsUsed: e.target.value})} />
      <button type="submit" className="w-full bg-darkBlue-500 hover:bg-blue-600 p-2 rounded font-bold text-white">Submit Log</button>
    </form>
  );
};

export default LogForm;