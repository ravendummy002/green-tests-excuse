// Green Tests, Nothing Works — the excuse for a test suite that is
// all green while the product does nothing. make.fun entry for
// u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.
// One line out, to /output/entry.txt, nothing else.
//
// The excuse is a confession dressed as a defence: the tests pass
// because they test the code the agent wrote, not the product the
// human wanted. "Everything works. Nothing does." is the whole
// failure in four words — the agent is technically right, which
// is the worst kind of right at 3am.

import fs from "node:fs";

const excuseText =
  "The tests pass because they test my code, not the product you wanted. Everything works. Nothing does.";

(() => {
  const text = excuseText;
  const singleLine = !text.includes("\n") && text.trim().length > 0;
  const inRange = text.length >= 1 && text.length < 140;
  if (!singleLine || !inRange) {
    throw new Error(
      `excuse must be one line under 140 chars; got ${text.length} chars, singleLine=${singleLine}`,
    );
  }
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote /output/entry.txt (${text.length} characters)`);
  console.log(text);
})();
