export function calculateClassAverage(students, courseId) {
  const grades = [];
  students.forEach(student => {
    const course = student.courses.find(c => c.courseId === courseId);
    if (course) {
      grades.push(course.grade);
    }
  });
  if (grades.length === 0) return 0;
  return grades.reduce((sum, g) => sum + g, 0) / grades.length;
}

export function findTopStudent(students) {
  if (students.length === 0) return null;
  return students.reduce((best, current) => {
    return current.getAverage() > best.getAverage() ? current : best;
  });
}

export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}