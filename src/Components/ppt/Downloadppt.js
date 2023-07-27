import React from 'react';
import ExportToPPT from './ExportToPPT';
import Blogdata from '../../Assets/json/blog.json'

const jsonData = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
  nam: 'John Doe',
  ag: 30,
  emai: 'john@example.com',
  na: 'John Doe',
  a: 30,
  ema: 'john@example.com',
  n: 'John Doe',
  q: 30,
  e: 'john@example.com',
  ne: 'John Doe',
  ae: 30,
  eail: 'john@example.com',
  nhe: 'John Doe',
  aea: 30,
  eil: 'john@example.com',
  nme: 'John Doe',
  ge: 30,
  mail: 'john@example.com',
  ame: 'John Doe',
  page: 30,
  eoail: 'john@example.com',
  npme: 'John Doe',
  agpe: 30,
  emlil: 'john@example.com',
  naje: 'John Doe',
  agel: 30,
  emafl: 'john@example.com',
  namem: 'John Doe',
  ageb: 30,
  emazl: 'john@example.com',
  
};

console.log("datatata", jsonData)

function Downloadppt() {
  return (
    <div>
      <h1>Export JSON to PPT</h1>
      <ExportToPPT jsonData={Blogdata} />
      {/* <ExportToPPT jsonData={jsonData} /> */}

    </div>
  );
}

export default Downloadppt;
