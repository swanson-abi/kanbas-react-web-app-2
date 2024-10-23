import "./assignment-style.css";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "../LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <input
        id="wd-search-assignment"
        placeholder="Search for Assignments"
      />
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

      <ul id="wd-assignments-list" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <div className="float-end">
              <span className="wd-rounded-corners-all-around wd-border-thin wd-border-grey wd-border-solid">
                40% of Total
              </span>
              <FaPlus />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid) // Filter assignments by course ID
              .map((assignment: any) => (
                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="wd-assignment-link" />
                  <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    <MdAssignment className="me-2 fs-3" />
                    {assignment.title}
                  </a>
                  <br />
                  {/* Update the message below if you have availability/due date info */}
                  <span>Due Date: {assignment.dueDate} | Points: {assignment.points}</span> {/* Placeholder */}
                  <LessonControlButtons />
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
