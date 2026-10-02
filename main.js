import { Student } from './models.js';
import { fetchStudents } from './database.js';
import { calculateClassAverage, findTopStudent, filterStudents } from './analytics.js';

fetchStudents((rawStudents) => {
  const students = rawStudents.map(s => new Student(s.id, s.name, s.courses));

  try {
    students[0].id = 999;
  } catch (err) {
    // Strict mode throws TypeError on read-only assignment
  }
  console.log("Testing ID immutability (should stay 1):", students[0].id);

  const avg101 = calculateClassAverage(students, 101);
  console.log("Course 101 Average:", avg101.toFixed(2));

  const topStudent = findTopStudent(students);
  console.log("Top Student:", topStudent.name, "with average:", topStudent.getAverage().toFixed(2));

  const taking102 = filterStudents(students, s => s.courses.some(c => c.courseId === 102));
  console.log("Students in Course 102:", taking102.map(s => s.name).join(", "));
});