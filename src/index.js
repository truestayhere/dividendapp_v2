import React from 'react'; import ReactDOM from 'react-dom'; import './index.css'; import App from './App'; import reportWebVitals from './reportWebVitals'

let greeting = "Moi";
const weights = [3, 2, 1, 1, 1];


console.log(`${greeting} from index.js`);
console.log("-------------------");


fetch('https://gist.githubusercontent.com/VincentLeV/a0c326b9cbeabf63b4e5e02aa9779f6c/raw/b916a9e3d40aef926bf7e3b9b4db308d7da1ca5d/shares.json')
  .then(response => response.json())
  .then(data => {
    data.map(value => {
      let dividendSum = 0;
      let weightDividendSum = 0;
      value.dividendHistory.map(item => { dividendSum += item.dividend; });
      weights.map((num, index) => { weightDividendSum += value.dividendHistory[index].dividend * num });

      let obj = {
        share: value.share,
        company: value.company,
        price: value.price,
        lastYearDividend: value.dividendHistory[0].dividend,
        dividendYield: (value.dividendHistory[0].dividend / value.price * 100),
        avgDividendYield: (dividendSum / (value.price * 5) * 100),
        weightAvgDividendYield: (weightDividendSum / weights.reduce((result, num) => result + num))
      };

      console.log(`Share: ${obj.share}\nCompany: ${obj.company}\nPrice: ${obj.price}\nLast year dividend: ${obj.lastYearDividend}\nDividend yield-%: ${obj.dividendYield.toFixed(1)}\n5-year average dividend yield-%: ${obj.avgDividendYield.toFixed(1)}\n5-year weighted average dividend yield-%: ${obj.weightAvgDividendYield.toFixed(1)}`);
      console.log("-------------------");

    })
  });












ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


