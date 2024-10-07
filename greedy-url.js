function getURL(str) {
  let mat = /(https?:\/\/[^\s]+)/g;
  let url = str.match(mat);
  return url || [];
}

function greedyQuery(dataSet) {
  const urls = getURL(dataSet);
  return urls.filter((url) => {


    const queryString = url.split("?")[1];
    if (!queryString) return false;
    const params = queryString.split("&");
    
    return params.length >= 3;
  

});
}
function notSoGreedy(dataSet) {
  const urls = getURL(dataSet);
  return urls.filter((url) => {
    const queryString = url.split("?")[1];
    if (!queryString) return false;
    const params = queryString.split("&");
    const paramCount = params.length;
    return paramCount >= 2 && paramCount <= 3;
  });
}
