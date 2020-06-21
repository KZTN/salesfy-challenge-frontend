import React, { useEffect } from "react";
import { ApplicationState } from "../../store";
import { useSelector } from "react-redux";
import "./styles.scss";

const Entries: React.FC = () => {
  const entries = useSelector((state: ApplicationState) => state.translate);

  useEffect(() => {
    var elem = document.querySelector("#list") as HTMLVideoElement;
    elem.scrollTo(10000, 10000);
  }, [entries]);

  return (
    <div className="entries">
      <div className="entries-header">
        <strong>Entries history</strong>
      </div>
      <ul id="list">
        {entries.history.map((entry) => (
          <li key={entry.id}>
            <div className="id">
              <span>#{entry.id}</span>
            </div>
            <div className="literal-number">
              <span>{entry.literal_number}</span>
            </div>
            <div className="extended-number">
              <span>{entry.extented_number}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Entries;
