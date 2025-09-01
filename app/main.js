const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const builtIns = ["echo", "exit", "type"];

const prompt = () => {
  rl.question("$ ", (answer) => {
    if (answer == "exit 0") {
      rl.close();
    } else if (answer.startsWith("echo ")) {
      const message = answer.slice(5);
      console.log(message);
      prompt();
    } else if (answer.startsWith("type ")) {
      const message = answer.slice(5);
      if (builtIns.includes(message)) {
        console.log(`${message} is a shell builtin`);
      } else {
        `${message}: not found`;
      }
      prompt();
    } else {
      console.log(`${answer}: command not found`);
      prompt();
    }
  });
};

prompt();
