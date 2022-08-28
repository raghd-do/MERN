function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
  let headsCount = 0;
  let attempts = 0;
  while (headsCount < 5) {
    attempts++;
    let result = tossCoin();
    console.log(`${result} was flipped`);
    if (result === "heads") {
      headsCount++;
    } else {
      headsCount = 0;
    }
  }
  return `It took ${attempts} tries to flip five "heads"`;
}

function fiveHeads() {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
      attempts += 1;
      if (attempts > 100) {
        reject("the coin has been flipped more than 100 times");
      }
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if (result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }
    resolve(`It took ${attempts} tries to flip five "heads"`);
  });
}
fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log("When does this run now?");
