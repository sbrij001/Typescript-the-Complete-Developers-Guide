import axios from 'axios';

// make a network request to fetch some JSON and print the result. 

const url = "https://jsonplaceholder.typicode.com/todos/1";
 axios.get(url).then(response => {
   console.log(response.data);
 });