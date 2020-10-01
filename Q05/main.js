console.log('Problem Solving Q: 5 ');

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: 
the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will
 represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string 
 containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string 
 false.
*/

function FindIntersection(strArr) {
  let Besslan1 = strArr [0].split(",");
  let Besslan2  = strArr [1].split(",");

  let Joza  = Besslan1.filter(function(value){
    return Besslan2.includes(value);
  });
    if(Joza.length === 0){
      return false;
    }else{
      return Joza.join(",").replace(/\s/g, "");
    }
}

/* 
Examples:
FindIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
FindIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/

