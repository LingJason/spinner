const spinner = [
'\r|  ',
'\r/  ',
'\r-  ',
'\r\\ ',
'\r|  '
];
let time = 0
for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, time);
  time += 200;
};