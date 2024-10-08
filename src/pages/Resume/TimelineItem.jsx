const TimelineItem = ({ title, date, description = {}, school }) => {
  return (
    <li className="timeline-item">
     <div className="eduHeader"> <div className={`eduLogo ${school}`}></div>
     <div className="eduTitle">
     <h4 className="h4 timeline-item-title">{title}</h4>
     <span>{date}</span>
     </div>
  
     </div>
  <ul>
  <li className="timeline-text">- GPA: {description.gpa}</li>

    <li className="timeline-text">- Major: {description.major}</li>
    <li className="timeline-text">- Coursework: {description.course}</li>
  </ul>
    </li>
  );
};

export default TimelineItem;
