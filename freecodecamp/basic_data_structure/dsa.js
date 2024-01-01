// 1 truncate string
// function truncateString(str, num) {
//     return str.length>num?str.substring(0, num)+ "...": str;
//   }
  
//   let r = truncateString("A-tisket a-tasket A green and yellow basket", 8);
//   console.log(r);


//   2 find keepers
//Finders Keepers-Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
    for(let i = 0; i<arr.length; i++){
      if(func(arr[i])){
        console.log(arr);
        return arr[i];
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

  function findElement(arr, func) {
    return arr.find(func);
  }
  
  findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

  function findElement(arr, func) {
    let num = 0;
  
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }

  function findElement(arr, func) {
    return arr.find(func);
  }
  function findElement(arr, func) {
    return arr.find(func);
  }
  
  findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

  function findElement(arr, func) {
    return arr.filter(func).shift();
  }
  function findElement(arr, func) {
  
    let test   = arr.filter(func),
        output = test.shift();
    
    return output
  }
  
  findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });

  //3-Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.
  function booWho(bool) {
    return typeof bool==="boolean";
  }
  
  console.log(booWho(null));

  //4 Title Case a Sentence Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting words like the and of.
  function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      console.log(newTitle)
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    console.log(updatedTitle);
    return updatedTitle.join(" ");
  }
    
  titleCase("I'm a little tea pot");

  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ");
  }
  
  titleCase("I'm a little tea pot");
  function titleCase(str) {
    return str
      .toLowerCase()
      .replace(/(^|\s)\S/g, L => L.toUpperCase());
  }

