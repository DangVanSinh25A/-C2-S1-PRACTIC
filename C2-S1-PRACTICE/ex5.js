let students = [
    { id: 1, name: "Trang", grade: "A" },
    { id: 2, name: "Hai", grade: "B" },
    { id: 3, name: "Linh", grade: "C" },
  ];

  function updateStudentGrade(studentsArray, idToUpdate, newGrade) {
    const index = studentsArray.findIndex((student) => student.id === idToUpdate);
    if (index !== -1) {
      const updatedStudentsArray = [...studentsArray];
      updatedStudentsArray[index] = {
        ...updatedStudentsArray[index],
        grade: newGrade,
      };
      return updatedStudentsArray;
    }
    return studentsArray;
   }

   console.log(updateStudentGrade(students,3,"S"));