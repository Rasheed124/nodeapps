import { send } from "./request.mjs";
import { read } from "./response.mjs";

function fetch(url, data) {
  send(url, data);
  return read();
}

const responseData = fetch("https://www.google.com", "Hello world");

console.log(responseData);
