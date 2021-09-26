// need to get the data from command line
const args = process.argv.slice(2);
// need to sort args
if (args.length === 0) {
  // console.log('length === 0 exiting')
  process.exit(1);
}
const sortArgs = [...args].sort();
const timeIntervalArgs = sortArgs;
// beeping function
const action = () => process.stdout.write('\x07');


for (let i = 0; i < timeIntervalArgs.length; i++) {

  if (isNaN(Number((timeIntervalArgs[i]))) === true) {
    continue;
  }
  if (timeIntervalArgs[i] < 0) {
    continue;
  }

  const waitTime = 1000 * (timeIntervalArgs[i]);
  // create timer with setTimeout
  setTimeout(() => {
    console.log('time delay', timeIntervalArgs[i]);
    // need to do action inside settimout
    action();
  }, waitTime);
}
