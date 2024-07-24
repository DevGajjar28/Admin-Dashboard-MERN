import { useState } from "react";
import Joyride from "react-joyride";
import { useLocation } from "react-router-dom";

const Tour = () => {
  const [run, setRun] = useState(true);
  const { pathname } = useLocation();

  const steps = [
    {
      target: ".logo-name",
      content: "Welcome to ECOMVISION!",
    },
    {
      target: ".MuiListItemButton-root",
      content: "These are your navigation items.",
    },
    {
      target: ".MuiDrawer-paper",
      content: "This is your sidebar.",
    },
    {
      target: ".Nav-menu",
      content: "click to Toggle",
    },
    {
      target: ".Nav-search",
      content: "Search Item",
    },
    {
      target: ".Nav-mode",
      content: "Click to change the theme color",
    },
    {
      target: ".Nav-user",
      content: "Hey it's me, User",
    },
    {
      target: ".download-reports-button",
      content: "Click here to download reports.",
    },

    {
      target: ".overview-chart",
      content: "Overview of sales chart.",
    },

    {
      target: ".data-grid",
      content: "Detailed transactions data.",
    },
    {
      target: ".breakdown-chart",
      content: "Sales by category breakdown chart.",
    },
  ];

  return (
    <div>
      <button onClick={() => setRun(true)}>Start Tour</button>
      <Joyride steps={steps} run={run} continuous showProgress showSkipButton />
      <Joyride
        steps={steps}
        run={run}
        continuous
        scrollToFirstStep
        showProgress
        showSkipButton
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
      />
    </div>
  );
};

export default Tour;
