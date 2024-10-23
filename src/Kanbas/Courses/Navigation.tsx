import { Link, useParams, useLocation } from "react-router-dom";
import "./course-nav.css";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      
      {links.map((link) => {

        return (
          <Link
            key={link} to={`/Kanbas/Courses/${cid}/${link}`} className={`list-group-item border border-0 $${pathname.includes(link) && "active"}`}>{link}
          </Link>
        );
      })}
    </div>
  );
}


