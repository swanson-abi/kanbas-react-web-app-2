import "./assignment-style.css";
import { FaCheck, FaPlus, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "../LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as assignmentsClient from "./client";
import { useEffect, useState } from "react";
import { deleteAssignment, setAssignments } from "./reducer";
import ProtectedRole from "../../Account/ProtectedRole";


export default function Assignments() {
  const { cid } = useParams();
  const assignments =  useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const [selectedAssignment, setSelectedAssignment] = useState("");

  const removeAssignment = async () => {
    await assignmentsClient.deleteAssignment(selectedAssignment);
    dispatch(await deleteAssignment(selectedAssignment));
  };

  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(await assignmentsClient.updateAssignment(assignment));
  };

  const fetchAllAssignments = async (cid: string, assignment: any) => {
    const modules = await assignmentsClient.findAllAssignmentsForCourse(cid as string, assignment);
    dispatch(await setAssignments(modules));
  };
  useEffect(() => {
    assignmentsClient.findAllAssignmentsForCourse(cid as string, assignments);
  }, []);

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
              .map((assignment: any) => (
                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="wd-assignment-link" />
                  <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    <MdAssignment className="me-2 fs-3" />
                    {assignment.title}
                  </a>
                  <br />
                  <span>Due Date: {assignment.dueDate} | Points: {assignment.points}</span>
                  <LessonControlButtons />
                  <ProtectedRole role="FACULTY">
                      <FaTrash className="text-danger me-2 mt-1 float-end" data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" onClick={() => setSelectedAssignment(assignment._id) } />
                      <FaCheck className="text-danger me-2 mt-1 float-end" data-bs-toggle="modal" data-bs-target="#wd-save-assignment-dialog" onClick={() => setSelectedAssignment(assignment._id) } />
                  </ProtectedRole>
                </li>
              ))}
          </ul>
        </li>
      </ul>

      <ProtectedRole role="FACULTY">
                <div id="wd-delete-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancel </button>
                                <button onClick={removeAssignment} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                                    Delete </button>
                                    <button onClick={saveAssignment} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                                    Save </button>
                            </div>
                        </div>
                    </div>
                </div>
        </ProtectedRole>
    </div>
  );
}
