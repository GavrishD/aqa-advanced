// Task 1: Assessing a Student's Level of Success

const averageGrade = 94;

if (averageGrade < 60) {
  console.log(`Unsatisfactory`);
} else if (averageGrade >= 60 && averageGrade <= 70) {
  console.log(`Satisfactory`);
} else if (averageGrade >= 71 && averageGrade <= 80) {
  console.log(`All right`);
} else if (averageGrade >= 81 && averageGrade <= 90) {
  console.log(`Very good`);
} else if (averageGrade >= 91 && averageGrade <= 100) {
  console.log(`Great`);
}
