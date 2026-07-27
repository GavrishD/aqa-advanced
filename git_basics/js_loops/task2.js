//Task 2:  Assessing a Student's Level of Success - switch/case

const averageGrade = 93;

switch (true) {
  case averageGrade < 60:
    console.log(`Unsatisfactory`);
    break;
  case averageGrade >= 60 && averageGrade <= 70:
    console.log(`Satisfactory`);
    break;
  case averageGrade >= 71 && averageGrade <= 80:
    console.log(`All right`);
    break;
  case averageGrade >= 81 && averageGrade <= 90:
    console.log(`Very good`);
    break;
  case averageGrade >= 91 && averageGrade <= 100:
    console.log(`Great`);
    break;
  default:
    console.log(`Sorry, your rating is unknown.`);
}
