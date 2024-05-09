"use client"
import { FetchDatasets } from './fetchDatasets';
import data1 from 'json_datasets/sample1.json';
import data2 from 'json_datasets/sample2.json';
import data3 from 'json_datasets/sample3.json';


function clickMe() {
    alert("You clicked me!");
  }

export function ViewDatasets() {
    return (
      <form
        action={async () => {
          await FetchDatasets();  // leaving this in because I think we'll need it when ViewDatasets actually shows datasets 
        }}
      >
        <button onClick={FetchDatasets}>Available Datasets</button>
      </form>
    );
  }