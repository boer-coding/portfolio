const TimelineItem = (props) => {
  const { title, imgs = [] } = props;

  return (
    <li className="timeline-item">
      <h3 className="h4 clients-title">{title}</h3>
      <br />
      {imgs.map((item, index) => (
        <img
          className="skillImg"
          key={index}
          src={item.src}
          alt={item.alt}
        ></img>
      ))}
    </li>
  );
};

export default TimelineItem;
