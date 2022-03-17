import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Container from "./component/QrCard";
import Heading from "./component/Heading";
import Paragraph from "./component/Paragraph";
import QrImg from "./component/QrImg";
import QrCard from "./component/QrCard";

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <QrCard>
          <QrImg />
          <Heading />
          <Paragraph />
        </QrCard>
      </div>
    </Fragment>
  );
};

export default App;
