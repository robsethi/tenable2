
function fetchData() {
    var resultElement = document.getElementById('getResult');
    resultElement.innerHTML = '';
    
    axios.get('http://jsonplaceholder.typicode.com/todos', {
        params: {
          id: [1,2]
        }
      })
        .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
        });   
    }

function clearOutput() {
    var resultElement = document.getElementById('getResult');
    while (resultElement.firstChild) resultElement.removeChild(resultElement.firstChild);
 
}

function generateSuccessHTMLOutput(response) {
  return  '<h4>Result</h4>' + 
          '<h5>Status:</h5> ' + 
          '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
          '<h5>Headers:</h5>' + 
          '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
          '<h5>Data:</h5>' + 
          '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
}
function generateErrorHTMLOutput(error) {
  return  '<h4>Result</h4>' + 
          '<h5>Message:</h5> ' + 
          '<pre>Oops something went wrong with this request...</pre>';

}