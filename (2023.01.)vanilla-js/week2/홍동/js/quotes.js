import { $ } from './libs/dom.js';
import quotes from './libs/quotes.js';

const randomNum = Math.floor(Math.random() * quotes.length);
const { quote, author } = quotes[randomNum];

$('#quote span:first-child').innerText = quote;
$('#quote span:last-child').innerText = `- ${author} -`;
