import { merge, fromEvent, interval, Subject } from "rxjs";

const clicks = fromEvent(document, "click");
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);

console.log(clicksOrTimer);

let subject = new Subject();

subject.subscribe((data) => addItem("1 " + data));

function addItem(val: any) {
	var node = document.createElement("li");
	var textnode = document.createTextNode(val);
	node.appendChild(textnode);
	document.getElementById("output").appendChild(node);
}
