import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generateLogbookPDF = (logs, studentName = "Student") => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text('Internship Logbook Summary', 14, 22);
  
  doc.setFontSize(12);
  doc.text(`Student: ${studentName}`, 14, 32);
  doc.text(`Export Date: ${new Date().toLocaleDateString()}`, 14, 38);

  const tableColumn = ["Date", "Company", "Task", "Skills"];
  const tableRows = logs.map(log => [
    new Date(log.date).toLocaleDateString(),
    log.company,
    log.taskDescription,
    Array.isArray(log.skillsUsed) ? log.skillsUsed.join(', ') : log.skillsUsed
  ]);

  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    startY: 45,
  });

  doc.save(`${studentName.replace(' ', '_')}_Logbook.pdf`);
};