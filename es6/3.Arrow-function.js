function sum(a, b) {
    return a + b;
  }
  var sum2 = function (a, b) {
    return a + b;
  }
  sum2(3, 2);
  var sum3 = (a, b) => {
    return a + b;
  }
  var sum4 = (a, b) => a + b;
  sum4(3, 3);
  var dosomething = () => Date.now();
  dosomething();
  var arr = [1, 2, 3];
  arr.map(x => x * x);
  //arrow la ham rut ngon function
  //part2: arrow khong co context(this)
  