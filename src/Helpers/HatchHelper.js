// Function to get the average score of each student
const getAverage = (grades) => {
  let total = 0;

  // loop through the scores, conver it to a number and add to the total
  for (const score of grades) {
    total = total + parseFloat(score);
  }

  // return the average
  return total / grades.length;
};

// search students by name
const filterStudentsByName = (name, students, setResults) => {
  // clear search result if the search field is empty
  if (name === "") {
    setResults([]);
  }

  // discontinue if there is no search yet
  if (name === null || name === "" || students === []) return;

  // empty the previous search array if any
  const searchResult = [];
  const data = name.toLowerCase();

  // loop through all students
  for (const student of students) {
    const firstName = student.firstName;
    const lastName = student.lastName;

    const fullName = firstName.toLowerCase() + " " + lastName.toLowerCase();

    // check if the search word or character matches
    if (
      [...fullName].includes(data) ||
      fullName === data ||
      fullName.split(" ").includes(data)
    ) {
      searchResult.push(student);
    }
  }

  setResults(searchResult);
};

// function to show or hide grades
const showGrades = (show, setShow) => {
  if (show === false) {
    setShow(true);
  } else {
    setShow(false);
  }
};

// add tags to the student's details
const addTag = (event, tag, student, setTag) => {
  event.preventDefault();

  // terminate if input is empty
  if (tag === "" || tag === null) return;

  // if the tags property already exist, add the new tag
  // else create a tags array and add the new tag
  if (student.tags) {
    student.tags.push(tag);
  } else {
    student.tags = [tag];
  }

  // clear the tag input field
  setTag("");
};

// get all students wih tags
const getStudentsWithTags = (students) => {
  let studentsWithTag = [];

  for (const student of students) {
    if (student.tags) {
      studentsWithTag.push(student);
    }
  }

  return studentsWithTag;
};

// search students by tag
const filterStudentsByTag = (tag, students, setResults) => {
  // clear search result if the search field is empty
  if (tag === "") {
    setResults([]);
  }

  // get all students with tags
  const studentsWithTag = getStudentsWithTags(students);

  // discontinue if there is no search yet
  if (tag === null || tag === "" || studentsWithTag === []) return;

  // empty the previous search array if any
  const searchResult = [];
  const data = tag.toLowerCase();

  // loop through all students
  for (const student of studentsWithTag) {
    const tags = student.tags;

    // loop throught the tags and see if there is a match
    for (const tag of tags) {
      // check if the search word or character matches
      if (
        [...tag].includes(data) ||
        tag === data ||
        tag.split(" ").includes(data)
      ) {
        searchResult.push(student);
      }
    }
  }

  setResults(searchResult);
};

export {
  getAverage,
  filterStudentsByName,
  showGrades,
  addTag,
  filterStudentsByTag,
};
