const rawStudents = [
  {
    id: 1,
    name: "Alice",
    courses: [
      { courseId: 101, grade: 85 },
      { courseId: 102, grade: 90 }
    ]
  },
  {
    id: 2,
    name: "Bob",
    courses: [
      { courseId: 101, grade: 70 },
      { courseId: 103, grade: 80 }
    ]
  },
  {
    id: 3,
    name: "Charlie",
    courses: [
      { courseId: 101, grade: 95 },
      { courseId: 102, grade: 88 }
    ]
  }
];

export function fetchStudents(callback) {
  setTimeout(() => {
    callback(rawStudents);
  }, 2000);
}