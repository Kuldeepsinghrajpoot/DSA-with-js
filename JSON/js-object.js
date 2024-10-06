const student = [
    {
      name: 'kuldeep',
      mid:"rajpoot",
      grade: [
        {
          school: "ssm",
        }
      ]
    }
  ];
  
//   updating the elements via direct assigning the values into the object

const [elements] = student
const update = {...elements,name:'pradeep',mid:"Rajpoot"}
console.log(update)

  const updatedStudent = student.map((e) => ({
    ...e,name:'kuldeepsinghrajpoot',
    grade: e.grade.map((g) => ({
      ...g,
      school: "rss", // Update the school name
    })),
  }));
  
//   // Destructuring the entire updatedStudent array
//   const [firstStudent] = updatedStudent; // If there are multiple students
//   const { name, grade } = firstStudent; // Destructure name and grade from the first student
  
//   console.log(firstStudent); // Logs: { name: 'kuldeep', grade: [{ school: "rss" }] }
//          // Logs: kuldeep
//   console.log(grade);       // Logs: [{ school: "rss" }]
  
// updatedStudent.map((e)=>(
//     console.log(e.name)
// ))