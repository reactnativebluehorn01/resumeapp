import React from "react";
import Header from "./Header";
import Professional from "./Professional";
import Education from "./Education";
import AdditionalSkills from "./AdditionalSkills";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";

function Left() {
  return (
    <div className="left">
      <div className="">
        <Router>
          <div className={classes.topLeft}>
            <Button color="primary" component={Link} to="/header">
              Header
            </Button>
            <Button color="primary" component={Link} to="/professional">
              Experience
            </Button>
            <Button color="primary" component={Link} to="/education">
              Education
            </Button>
            <Button color="primary" component={Link} to="/additional">
              Skills
            </Button>
          </div>
          <div>
            <hr className={classes.hr} />
            <div className={classes.formsSection}>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/header">
                  <Header />
                </Route>
                <Route path="/professional">
                  <Professional />
                </Route>
                <Route path="/education">
                  <Education />
                </Route>
                <Route path="/additional">
                  <AdditionalSkills />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Left;