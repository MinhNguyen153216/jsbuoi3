function sortNum(a, b, c) {
  let arr1 = [a, b, c];
  return arr1.sort((a, b) => a - b);
}

function findDay(day, month, year) {
  /*Based on homework description, no input validation required
        so: + "day" must be an int and the real day in month.
            + "month" must be string with 3 first letter of the month
                    and must capitalize first letter.
            + "year" must be an int. */

  let inputDate = new Date(month + " " + day + ", " + year);
  let nextDay = new Date(inputDate),
    previousDay = new Date(inputDate);

  nextDay.setDate(inputDate.getDate() + 1);
  previousDay.setDate(inputDate.getDate() - 1);

  return "- Next Day: " + nextDay + "\n" + "- Previous Day: " + previousDay;
}

function whoUsing(username) {
  // seriously ?!
  let dict3NgonNenLungLinh = {
    B: " Chào cây nến vàng :) ",
    M: " Chào cây nến xanh :> ",
    A: " Chào cây nến cam >:( ",
    E: " Chào cây nến hồng :3 ",
  };

  for (aKey in dict3NgonNenLungLinh) {
    if (username == aKey) {
      return dict3NgonNenLungLinh[aKey];
    }
  }
}

function countOddEven(num1, num2, num3) {
  let arr1 = [num1, num2, num3];
  let oddCounter = 0,
    evenCounter = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
      evenCounter += 1;
    } else {
      oddCounter += 1;
    }
  }

  return "odd: " + oddCounter + "\n" + "even: " + evenCounter;
}

function dayReturn(month, year) {
  let month31 = [1, 3, 5, 7, 8, 10, 12],
    month30 = [4, 6, 9, 11];

  if (month30.includes(month)) {
    return 30;
  } else if (month31.includes(month)) {
    return 31;
  } else if (year % 4 === 0) {
    return 28;
  } else {
    return 29;
  }
}

function distanceCalc(nameA, aX, aY, nameB, bX, bY, nameC, cX, cY) {
  // using Euclidean distance
  let listStudent = [nameA, nameB, nameC],
    home = [
      [aX, aY],
      [bX, bY],
      [cX, cY],
    ],
    school = [5, 9],
    distance = [];

  for (let i = 0; i < home.length; i++) {
    distance.push(
      Math.sqrt(
        Math.pow(home[i][0] - school[0], 2) +
          Math.pow(home[i][1] - school[1], 2)
      )
    );
  }

  let index = distance.indexOf(Math.max(...distance));
  return "Farest distance: " + listStudent[index] + " -> " + distance[index];
}

function abs(num1, num2, num3) {
  return Math.abs(num1) + "," + Math.abs(num2) + "," + Math.abs(num3);
}

function readNum(num1) {
  // JESUS CHRIST !!!!
  let readingLine = "";
  if (num1 < 0) {
    readingLine = readingLine.concat("Âm ");
  } else {
    readingLine = readingLine.concat("Dương ");
  }
  if (Math.floor(num1 / 100) === 1) {
    readingLine = readingLine.concat("một trăm ");
  }
  if (Math.floor(num1 / 100) === 2) {
    readingLine = readingLine.concat("hai trăm ");
  }
  if (Math.floor(num1 / 100) === 3) {
    readingLine = readingLine.concat("ba trăm ");
  }
  if (Math.floor(num1 / 100) === 4) {
    readingLine = readingLine.concat("bốn trăm ");
  }
  if (Math.floor(num1 / 100) === 5) {
    readingLine = readingLine.concat("năm trăm ");
  }
  if (Math.floor(num1 / 100) === 6) {
    readingLine = readingLine.concat("sáu trăm ");
  }
  if (Math.floor(num1 / 100) === 7) {
    readingLine = readingLine.concat("bảy trăm ");
  }
  if (Math.floor(num1 / 100) === 8) {
    readingLine = readingLine.concat("tám trăm ");
  }
  if (Math.floor(num1 / 100) === 9) {
    readingLine = readingLine.concat("chín trăm ");
  }
  if (num1 % 100 === 10) {
    readingLine = readingLine.concat("mười.");
    return readingLine;
  }
  if (num1 % 100 === 11) {
    readingLine = readingLine.concat("mười một.");
    return readingLine;
  }
  if (Math.floor(num1 / 10) % 10 === 1) {
    readingLine = readingLine.concat("mười ");
  }
  if (Math.floor(num1 / 10) % 10 === 2) {
    readingLine = readingLine.concat("hai mươi");
  }
  if (Math.floor(num1 / 10) % 10 === 3) {
    readingLine = readingLine.concat("ba mươi");
  }
  if (Math.floor(num1 / 10) % 10 === 4) {
    readingLine = readingLine.concat("bốn mươi");
  }
  if (Math.floor(num1 / 10) % 10 === 5) {
    readingLine = readingLine.concat("năm mươi");
  }
  if (Math.floor(num1 / 10) % 10 === 6) {
    readingLine = readingLine.concat("sáu mươi");
  }
  if (Math.floor(num1 / 10) % 10 === 7) {
    readingLine = readingLine.concat("bảy mươi");
  }
  if (Math.floor(num1 / 10) % 10 === 8) {
    readingLine = readingLine.concat("tám mươi");
  }
  if (Math.floor(num1 / 10) % 10 === 9) {
    readingLine = readingLine.concat("chín mươi");
  }
  if (num1 % 10 === 0) {
    readingLine = readingLine.concat(".");
    return readingLine;
  }
  if (Math.floor(num1 / 10) % 10 === 0) {
    readingLine = readingLine.concat("lẻ");
  }
  if (num1 % 10 === 1) {
    readingLine = readingLine.concat(" mốt.");
    return readingLine;
  }
  if (num1 % 10 === 2) {
    readingLine = readingLine.concat(" hai.");
    return readingLine;
  }
  if (num1 % 10 === 3) {
    readingLine = readingLine.concat(" ba.");
    return readingLine;
  }
  if (num1 % 10 === 4) {
    readingLine = readingLine.concat(" bốn.");
    return readingLine;
  }
  if (num1 % 10 === 5) {
    readingLine = readingLine.concat(" năm.");
    return readingLine;
  }
  if (num1 % 10 === 6) {
    readingLine = readingLine.concat(" sáu.");
    return readingLine;
  }
  if (num1 % 10 === 7) {
    readingLine = readingLine.concat(" bảy.");
    return readingLine;
  }
  if (num1 % 10 === 8) {
    readingLine = readingLine.concat(" tám.");
    return readingLine;
  }
  if (num1 % 10 === 9) {
    readingLine = readingLine.concat(" chín.");
    return readingLine;
  }
}

function triangleCheck(num1, num2, num3) {
  if (
    !isNaN(num1) &&
    !isNaN(num2) &&
    !isNaN(num3) &&
    num1 > 0 &&
    num2 > 0 &&
    num3 > 0
  ) {
    if (num1 === num2 || num1 === num3 || num2 === num3) {
      return "tam giac can";
    }
    if (num1 === num2 && num2 === num3) {
      return "tam giac deu";
    }
    if (
      num1 * num1 === num2 * num2 + num3 * num3 ||
      num2 * num2 === num1 * num1 + num3 * num3 ||
      num3 * num3 === num1 * num1 + num2 * num2
    ) {
      return "tam giac vuong";
    } else {
      return "cái này là tam giác quỷ >:(";
    }
  } else {
    return "please enter valid input!";
  }
}

console.log(sortNum(3, 1, 2));
console.log(findDay(17, "May", 2022));
console.log(whoUsing("B"));
console.log(countOddEven(1, 3, 5));
console.log(distanceCalc("ASD", 1, 7, "ZXC", 5, 2, "QWE", 4, 9));
console.log(abs(-51, 8, -69));
console.log(readNum(200));
console.log(readNum(510));
console.log(readNum(411));
console.log(readNum(708));
console.log(triangleCheck(3, 4, 5));
console.log(triangleCheck(7, 1, 3));
