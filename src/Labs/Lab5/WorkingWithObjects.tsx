import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const [module, setModule] = useState({
        id: 0, name: "Module 1",
        description: "Description of Module 1",
        course: "CS3800"
    });
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            {/* Updating / Setting Assignment Title */}
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Assignment Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />
            {/* Updating / Setting Module Name */}
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input className="form-control w-75" id="wd-module-name"
                defaultValue={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <hr />
            {/* Updating / Setting Module Description */}
            <a id="wd-update-module-description"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <input className="form-control w-75" id="wd-module-description"
                defaultValue={module.description} onChange={(e) =>
                    setModule({ ...module, description: e.target.value })} />
            <hr />
            {/* Updating / Setting Assignment Score */}
            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Assignment Score
            </a>
            <input
                type="number"
                className="form-control w-75"
                id="wd-assignment-score"
                defaultValue={assignment.score}
                onChange={(e) =>
                    setAssignment({ ...assignment, score: Number(e.target.value) })} />
            <hr />
            {/* Updating / Setting Assignment Completion */}
            <div>
                <label htmlFor="wd-assignment-completed" className="form-label">
                    Mark as Completed:
                </label>
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-assignment-completed"
                    checked={assignment.completed}
                    onChange={(e) =>
                        setAssignment({ ...assignment, completed: e.target.checked }) // Update `completed` in state
                    }
                />
            </div>
            <a
                id="wd-update-assignment-completed"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`} // Update URL dynamically
            >
                Update Assignment Completion
            </a>
            <hr />

            {/* Getting certain objects and object attributes */}
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />
            <a id="wd-retrieve-modules" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Assignment Title
            </a><hr />
            <a id="wd-retrieve-assignment-score" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/score`}>
                Get Assignment Score
            </a><hr />
            <a id="wd-retrieve-assignment-completed" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/completed`}>
                Get Assignment Completion
            </a><hr />
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a><hr />
            <a id="wd-retrieve-module-description" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/description`}>
                Get Module Description
            </a><hr />
        </div>
    );
}
