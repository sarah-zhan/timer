const numberList = process.argv.slice(2);

const timer1 = (number) => {

  if (!isNaN(number) || number < 0) {
    setTimeout(() => process.stdout.write('\x07'), number * 1000);

  }
};

for (const num of numberList) {
  timer1(num);
}


