import { useState, useEffect } from "react";

const BasicForm = (props) => {
  const [userName, setUserName] = useState({ name: "", last: "", email: "" });
  const [nameisValid, setNameIsValid] = useState(false);
  const [lastisValid, setLastIsValid] = useState(false);
  const [emailisValid, setEmailIsValid] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (userName.name <= 0) {
      setNameIsValid(true);
    }

    if (userName.last <= 0) {
      setLastIsValid(true);
    }
    if (userName.email <= 0) {
      setEmailIsValid(true);
    }
  };

  useEffect(() => {
    setNameIsValid(false);
    setLastIsValid(false);
    setEmailIsValid(false);
  }, [userName]);
  return (
    <form onSubmit={submitForm}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          {nameisValid && (
            <span className="error-text">Fields are not filled</span>
          )}
          <input
            type="text"
            id="name"
            name="name"
            value={userName.name}
            onChange={(e) => setUserName({ ...userName, name: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="last">Last Name</label>{" "}
          {lastisValid && (
            <span className="error-text">Fields are not filled</span>
          )}
          <input
            type="text"
            id="name"
            name="last"
            value={userName.last}
            onChange={(e) => setUserName({ ...userName, last: e.target.value })}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>{" "}
        {emailisValid && (
          <span className="error-text">Fields are not filled</span>
        )}
        <input
          type="text"
          id="name"
          name="email"
          value={userName.email}
          onChange={(e) => setUserName({ ...userName, email: e.target.value })}
        />
      </div>
      <div className="form-actions">
        <button> Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
