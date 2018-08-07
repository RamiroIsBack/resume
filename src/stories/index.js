import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import Service from "../components/presentational/Service";
import { Services_css } from "../css";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => {
    return (
      <Button onClick={action("clicked")}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    );
  });

storiesOf("service", module).add("single service", () => {
  let info = {
    bio: `I've been using it since I started learning JavaScript, it's a very easy and useful tool for styling responsive elements.
      I've been using Css-grid lately though, it's great!`,
    nombre: "Bootstrap",
    percentage: 75,
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/resume-40a8a.appspot.com/o/fotos%2Fbootstrap.png?alt=media&token=37ff7c85-72f7-4220-b2eb-19a0a232d355"
  };
  return <Service sectionSelected={true} serviceInfo={info} />;
});
