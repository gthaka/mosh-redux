import { bugAdded, bugRemoved, bugResolved } from "./actions";
import store from "./store";

let oldConsoleLog = window.console.log;
window.console.log = function (message) {
    document.getElementById("consoleFrame").innerHTML += message + '<br>';
    oldConsoleLog(message);
};

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!!", store.getState())
});

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugAdded("Bug2"));

store.dispatch(bugResolved(1));

console.log(JSON.stringify(store.getState()));