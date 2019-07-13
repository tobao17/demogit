// function log(...nums)
// {
//   console.log(nums);
// }
// log(1,2,3,4,5,6);
//rest ...se tra ve mot mang 
function concat (separator,...strings){
    return strings.join(separator);
  
  }
  concat(".","a","b","c");