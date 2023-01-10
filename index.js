for (var i = 1; i <= 100; i++) {
  i % 3 == 0
    ? console.log('google')
    : i % 5 == 0
    ? console.log('facebook')
    : i % 3 == 0 && i % 5 == 0
    ? console.log('amazon')
    : console.log(i);
}
