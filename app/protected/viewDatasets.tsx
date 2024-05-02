"use client"
import { FetchDatasets } from './fetchDatasets';

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