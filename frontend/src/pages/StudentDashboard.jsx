import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import API from '../services/api';
import LogForm from "../components/LogForm";
import { generateLogbookPDF } from '../utils/generatePDF';

<button 
  onClick={() => generateLogbookPDF(logs, user.name)} 
  className="bg-green-600 px-4 py-2 mb-4 rounded"
>
  Download PDF
</button>

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    const res = await API.get(`/logs/${user.id}`);
    setLogs(res.data);
  };

  useEffect(() => { fetchLogs(); }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">My Logs</h1>
      <button onClick={() => generateLogbookPDF(logs, user.name)} className="bg-green-600 px-4 py-2 mb-4 rounded">Download PDF</button>
      
      <LogForm studentId={user.id} onLogAdded={fetchLogs} />
      
      <div className="mt-8">
        {logs.map(log => (
          <div key={log._id} className="bg-darkBlue-700 p-4 mb-2 rounded">
            <h3 className="font-bold">{log.company} - {new Date(log.date).toDateString()}</h3>
            <p>{log.taskDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StudentDashboard;