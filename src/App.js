import React, { useState } from "react";
import gift from "./image/gift.png";
import { FaTimes, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
function App() {
  const [birthday, setBirthday] = useState();
  const [luckyNumber, setLuckyNumber] = useState();
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    if (birthday && luckyNumber) {
      const dateArray = birthday.split("-");
      let sum = 0;
      for (let i = 0; i < dateArray.length; i++) {
        sum += Number(dateArray[i]);
      }
      if (sum % Number(luckyNumber) === 0) {
        setText("Hurray! your birthday is a lucky number! ");
      } else {
        setText("Sorry, your birthday is not a lucky number");
      }
    } else {
      setText("Please enter a value!");
    }
  };
  return (
    <main>
      <article className="main-app">
        <section className="form-container">
          {alert && (
            <div className="privacy-notice">
              <h3>Privacy Notice! We are not storing your data</h3>
              <button style={{ color: "red" }} onClick={() => setAlert(false)}>
                {" "}
                <FaTimes className="close-btn" />{" "}
              </button>
            </div>
          )}
          <h1 className="heading">Is your birthday lucky?</h1>
          <form onSubmit={submitHandler} className="form">
            <h3>Enter your birthdate: </h3>
            <input
              type="date"
              className="date-input"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <input
              type="number"
              value={luckyNumber}
              placeholder="Enter your lucky Number"
              onChange={(e) => setLuckyNumber(e.target.value)}
            />
            <button className="submit-btn" type="submit">
              {" "}
              check{" "}
            </button>
          </form>
          <h2>{text}</h2>
        </section>
        <img className="gift-img" src={gift} alt="gift box" />
      </article>
      <footer>
        <a href="https://twitter.com/partha_sarma8">
          <FaTwitter />
        </a>
        <a href="https://github.com/partha8">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/partha8/">
          <FaLinkedin />
        </a>
        <a href="https://parthasarma.netlify.app/">
          <AiOutlineGlobal />
        </a>
      </footer>
    </main>
  );
}

export default App;
