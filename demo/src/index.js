import React from "react";
import ReactDOM from "react-dom";

import { Button } from 'react-comp-trial-lib-approach-1';
import 'react-comp-trial-lib-approach-1/dist/styles.css';
import './base.css';
import ButtonStyle from './Button.module.css';

const Index = () => {
  return (
    <div>
      Hello React!
      <input/>
      <Button className={ButtonStyle.Button}>
        Button
      </Button>
      <Button>
        Submit
      </Button>
    </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));
