import React, { useState } from "react";
import { addTag, getAverage, showGrades } from "../Helpers/HatchHelper";
import { ImPlus, ImMinus } from "react-icons/im";

export default function Student(props) {
  // props
  const student = props.student;

  //   states
  const [show, setShow] = useState(false);
  const [tag, setTag] = useState("");

  return (
    <div key={student.id} id="student">
      {/* image */}
      <aside>
        <img
          src={student.pic}
          alt={student.firstName + " " + student.lastName}
        />
      </aside>

      <aside>
        <section id="name_and_button">
          {/* name */}
          <h1>{student.firstName + " " + student.lastName}</h1>

          {/* toggle button */}
          <button onClick={() => showGrades(show, setShow)}>
            {show ? <ImMinus /> : <ImPlus />}
          </button>
        </section>

        {/* other details */}
        <p>Email: {student.email}</p>
        <p>Company: {student.company}</p>
        <p>Skill: {student.skill}</p>
        <p>Average: {getAverage(student.grades)}</p>

        {/* tags form */}
        <form id="tag_form" onSubmit={(e) => addTag(e, tag, student, setTag)}>
          {/* tah list */}
          {student.tags && student.tags.length > 0
            ? student.tags.map((tag) => <button>{tag}</button>)
            : "No tags yet"}

          <br />

          {/* tag input */}
          <input
            name="tag"
            placeholder="Add a tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </form>

        {/* grades */}
        {show ? (
          <table>
            {student.grades && student.grades.length > 0
              ? student.grades.map((grade, index) => (
                  <tr key={index}>
                    <td>Test {index + 1}</td>
                    <td>{grade}%</td>
                  </tr>
                ))
              : "No Grades for this student"}
          </table>
        ) : (
          ""
        )}
      </aside>
    </div>
  );
}
