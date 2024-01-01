// function whatIsInAName(collection, source) {
//     let arr = [];
//     for(let i=0; i<collection.length; i++){
//         let foundMisMatched = false;
//         for(let sourceProps in source){
//             console.log('source:',source);
//             console.log('sourceProps', sourceProps);
//             console.log('collection[i]',collection[i]);
//             console.log('collection[i][sourceProps]',collection[i][sourceProps]);
//             if(collection[i][sourceProps] !== source[sourceProps]){
//                 foundMisMatched = true;
//             }
//         }
//         if(!foundMisMatched){
//             arr.push(collection[i]);
//         }
//     }
//     console.log('arr',arr);
//     return arr;

//   }

//   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// let arrObj = [
//     {id: 1, name: 'kane'},
//     {id: 2, name: 'jane'},
//     {id: 3, name: 'mane'},
//     {id: 4, name: 'chane'}
// ];

// let r = arrObj.find((item)=>{
//     return item.id === 1;
// });
// console.log(r);
// let result = arrObj.filter((item)=>{
//     return item.id !== 2;
// });
// console.log(result);

// function translatePigLatin(str) {
//     // Create variables to be used
//     var pigLatin = "";
//     var regex = /[aeiou]/gi;

//     // Check if the first character is a vowel
//     if (str[0].match(regex)) {
//       pigLatin = str + "way";
//     } else if (str.match(regex) === null) {
//       // Check if the string contains only consonants
//       pigLatin = str + "ay";
//     } else {
//       // Find how many consonants before the first vowel.
//       var vowelIndice = str.indexOf(str.match(regex)[0]);

//       // Take the string from the first vowel to the last char
//       // then add the consonants that were previously omitted and add the ending.
//       pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
//     }

//     return pigLatin;
//   }

//   // test here
//   translatePigLatin("consonant");

// function myReplace(str, before, after) {
//     let bIndex = str.indexOf(before);
//     console.log(bIndex);
//     console.log(before.charAt(0));
//     if(str[bIndex]===str[bIndex].toUpperCase()){
//         after = after.chatAt(0).toUpperCase() + after.slice(1);
//         console.log(after);
//     } else{
//         after = after.charAt(0).toLowerCase() + after.slice(1)
//     }
//     str = str.replace(before, after)
//     console.log(str);
//     return str;
//   }

//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// function pairElement(str) {
//   const matchPairs = function (char) {
//     switch (char) {
//       case "A":
//         return ["A", "T"];
//       case "T":
//         return ["T", "A"];
//       case "G":
//         return ["G", "C"];
//       case "C":
//         return ["C", "G"];
//       case "G":
//         return ["G", "C"];
//     }
//   }
//   // find pair that matched! 
  
//   let pairs = [];
//   for(let i=0; i<str.length; i++){
//     console.log(str[i]);
//     pairs.push(matchPairs(str[i]));
//   }
//   console.log(pairs);
//   return pairs;
// }

// pairElement("GCG");

// function fearNotLetter(str) {
//     for(let i=0; i<str.length;i++){
//         const codeChar = str.charCodeAt(i);
//         console.log(codeChar);
//         if(codeChar !== str.charCodeAt(0)+i){
//             return String.fromCharCode(codeChar -1);
//         }
//     }

//     return undefined;
//   }
//   fearNotLetter("abce");

function uniteUnique(arr1, arr2, arr3) {
    let finalArr = [];
    for(let i=0; i<arguments.length; i++){
        const arg = arguments[i];
        for(let j=0; j<arg.length; j++){
            const indexValue = arg[j];
            console.log(indexValue);
            if(finalArr.indexOf(indexValue)<0){
                console.log(indexValue);
                finalArr.push(indexValue)
            }
        }
    }
    finalArr.sort((a,b)=>a-b)
    console.log(finalArr);
    return finalArr;
   
  }   
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


