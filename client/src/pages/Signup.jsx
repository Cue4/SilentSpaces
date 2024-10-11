import { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../utils/api";
import image from "../assets/Image.png";

import Auth from "../utils/auth";

const defaultTitle = {
  text: "Silent Spaces, where words connect.",
};

const inspomssg = {
  text: "Engage in meaningful conversations, distraction-free.",
};

const styles = {
  Text: {
    color: "#030303",
    fontSize: "32px",
    fontFamily: "Poppins",
    fontWeight: 700,
    lineHeight: "38px",
    textAlign: "center",
  },
};

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const response = await createUser(formState);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
      setLoggedIn(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {loggedIn ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <section className="login-container">
                <div className="greycard-container">
                  <div className="img-container">
                  <img src={'https://assets.api.uizard.io/api/cdn/stream/2a051839-c47a-4a23-a3f2-57c65d552dc9.png'} alt="" />
                  </div>
                  
                  <div style={styles.Text}>
                    {defaultTitle.text}
                    <p>{inspomssg.text}</p>
                  </div>
                </div>

                <form className="signupForm" onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Your username"
                    name="username"
                    type="text"
                    value={formState.username}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-block btn-info"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </section>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
