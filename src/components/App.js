import React from "react";
import { Jokes } from "./Jokes";

const App = () => {
  return (
    <div>
      <Jokes
        setup="I got my daughter a fridge for her birthday."
        punchLine="I can't wait to see her face light up when she opens it."
        hasSetUp={true}
      />
      <Jokes
        setup="How did the hacker escape the police?"
        punchLine="He just ransomware!"
        hasSetUp={true}
      />
      <Jokes
        setup="Why don't pirates travel on mountain roads?"
        punchLine="Scurvy."
        hasSetUp={true}
      />
      <Jokes
        setup="Why do bees stay in the hive in the winter?"
        punchLine="Swarm."
        hasSetUp={true}
      />
      <Jokes
        punchLine="It's hard to explain puns to kleptomaniacs because 
        they always take things literally."
        hasSetUp={false}
      />
    </div>
  );
};
