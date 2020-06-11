let firstStr = "aababba";
let secondStr = "abbaaabcd";
let finder = function (str1, str2) {
  arr = [];
  str1.split("").reduce((total, letter) => {
    if (str2.indexOf(`${total}${letter}`) !== -1) {
      arr.push(`${total}${letter}`);
      return `${total}${letter}`;
    } else return letter;
  }, "");
  console.log(`Результат : ${arr.sort((a, b) => b.length - a.length)[0]}`);
};
console.log(`Строка А : ${firstStr}`);
console.log(`Строка Б : ${secondStr}`);
finder(firstStr, secondStr);

