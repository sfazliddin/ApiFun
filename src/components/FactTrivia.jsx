/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { numbersHost, numbersKey, numbersUrl } from "../utils/numbersApi";

const TriviaFact = () => {
  const [number, setNumber] = useState(null);
  const [triviaFact, setTriviaFact] = useState(null);
  const getTriviaFact = async () => {
    const triviaUrl = `${numbersUrl}/${number}/trivia`;
    const options = {
      method: "GET",

      headers: {
        "X-RapidAPI-Key": numbersKey,
        "X-RapidAPI-Host": numbersHost,
      },
    };

    try {
      const response = await fetch(triviaUrl, options);
      const result = await response.text();

      console.log(result);

      setTriviaFact(result);
    } catch (error) {
      console.error(error);
    }
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const isNumber = !null;

      isNumber ? getTriviaFact() : alert("Please Put in a Valid Number");
    } catch (err) {
      console.error(err.message);
    }
  };
  const updateNumber = (e) => setNumber(e.target.value);
  let responseOutput = <></>;

  return (
    <>
      <form onSubmit={submit}>
        {responseOutput}
        <div className="container col-10 col-md-8 col-lg-8 d-flex flex-column mx-auto bg-info rounded p-2 mb-5">
          <div className="form-floating p-1 my-1">
            <input
              required
              type="number"
              className="form-control"
              id="number"
              value={number}
              onChange={updateNumber}
            />
            <label htmlFor="month" className="ps-3">
              Number
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-lg btn-dark col-8 mx-auto m-2 text-info-emphasis"
          >
            Get Trivia Fact
          </button>

          <h4 className="text-light">{triviaFact}</h4>
        </div>
      </form>
    </>
  );
};
export default TriviaFact;
