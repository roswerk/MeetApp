import React from "react";
import './WelcomeScreen.css';
function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <div className="WelcomeMessage">
          <h1 className="WelcomeTitle">Welcome to the Meet app</h1>
          <h4 className="WelcomeText">
            Log in to see upcoming events around the world for <mark id="marked">full-stack developers</mark>
          </h4>
          <div className="bottomPart">
            <div className="button_cont" align="center">
              <div class="google-btn">
                <div class="google-icon-wrapper">
                  <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg" alt="Google sign-in" />
                </div>
                <button onClick={() => { props.getAccessToken() }}
                  rel="nofollow noopener"
                  class="btn-text-welcomeScreen"
                >
                  <b className="buttonText">Sign in with google</b>
                </button>

              </div>
            </div>
            <a href="https://roswerk.github.io/MeetApp/privacy.html" rel="nofollow noopener" className="privacy">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    )
    : null
}
export default WelcomeScreen;