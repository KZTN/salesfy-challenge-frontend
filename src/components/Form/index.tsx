import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import * as TranslateActions from "../../store/ducks/translates/actions";

// import { Container } from './styles';

const Form: React.FC = () => {
  const [textfield, setTextField] = useState<string>("");
  const dispatch = useDispatch();

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    dispatch(TranslateActions.LoadRequest(textfield));
    setTextField("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="inputfield"
        id="inputfield"
        value={textfield}
        onChange={(e) => setTextField(e.target.value)}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;