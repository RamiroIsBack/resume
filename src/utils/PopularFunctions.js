export default {
  selectSpecificCopy: (props, who) => {
    let copy = {};
    if (props.copy) {
      if (props.copy.copyList.length !== 0) {
        for (let i = 0; i < props.copy.copyList.length; i++) {
          if (props.copy.copyList[i].nombre === who) {
            copy = props.copy.copyList[i];
            break;
          }
        }
      }
    }
    return copy;
  }
};

// lengthOfLongestSubstring: function(s) {
//   let substring = s.charAt(0);
//   let candidate = "";
//   let match = false;
//   for (let i = 1; i < s.length; i++) {
//     for (let j = 0; j < substring.length; j++) {
//       if (s.charAt(i) === substring.charAt(j)) {
//         match = true;
//         break;
//       }
//     }

//     if (!match) {
//       substring += s.charAt(i);
//     } else {
//       match = false;
//       if (candidate === "") {
//         candidate = substring;
//         substring = s.charAt(i);
//       } else {
//         if (candidate.length < substring.length) {
//           candidate = substring;
//         }
//         substring = s.charAt(i);
//       }
//     }
//   }
//   return candidate.length > substring.length
//     ? candidate.length
//     : substring.length;
// },
// lengthOfLongestSubstringWithCache: function(s) {
//   if (s.length === 0) {
//     return 0;
//   } else if (s.length === 1) {
//     return 1;
//   }

//   let start = 0;
//   let max = 0;
//   let len = s.length;
//   let cache = new Map();

//   for (let i = 0; i < len; i++) {
//     let c = s.charAt(i);
//     if (cache.has(c) && cache.get(c) >= start) {
//       start = cache.get(c) + 1;
//     }
//     cache.set(c, i);
//     max = Math.max(max, i - start + 1);
//   }
//   return max;
// },
// myAtoi: str => {
//   let negative = false;
//   let indexToErase = [];
//   let cleanString = str.split("");
//   for (let i = 0; i < cleanString.length; i++) {
//     let elem = cleanString[i];
//     let postElement = null;
//     let alreadyNumbers = false;
//     let closeIt = false;
//     if (i < cleanString.length - 1) {
//       postElement = cleanString[i + 1];
//     }

//     if (/[^0-9]/.test(elem)) {
//       if (elem !== "-" && i === 0 && elem !== " " && elem !== "+") {
//         return 0;
//       }
//       if (elem == "+" || elem == "-") {
//         if (postElement == "+" || postElement == "-") {
//           return 0;
//         }
//       }
//       if (elem === "-") {
//         negative = true;
//       }
//       if (elem !== ".") {
//         indexToErase.push(i);
//       }
//       if (alreadyNumbers) {
//         closeIt = true;
//       }
//     } else {
//       if (closeIt) {
//         indexToErase.push(i);
//       }
//       alreadyNumbers = true;
//     }
//   }
//   for (let j = indexToErase.length - 1; j >= 0; j--) {
//     cleanString.splice(indexToErase[j], 1);
//   }
//   if (+cleanString.join("") > 2147483648) {
//     return negative ? -2147483648 : 2147483648;
//   }

//   return negative
//     ? Math.trunc(-cleanString.join(""))
//     : Math.trunc(+cleanString.join(""));
// },
// maxArea: function(height) {
//   let prevTallfirst = 0;
//   let prevTallsecond = 0;
//   let prevbigest = 0;

//   let halfTheArray = Math.trunc(height.length / 2);
//   for (let i = 0; i <= halfTheArray; i++) {
//     for (let j = height.length - 1; j > halfTheArray; j--) {
//       let tallfirst = height[i];
//       let tallsecond = height[j];
//       let wide = j - i; //j-i = X axis = wide
//       let bigest =
//         tallfirst < tallsecond ? tallfirst * wide : tallsecond * wide;
//       if (bigest > prevbigest) {
//         prevbigest = bigest;
//       }
//     }
//   }
//   return prevbigest;
// }
