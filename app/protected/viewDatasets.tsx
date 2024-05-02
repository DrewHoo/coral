"use client"
import { DisplayStaticJson } from './fetchDatasets';

function clickMe() {
    alert("You clicked me!");
  }

export function ViewDatasets() {
    return (
      <form
        action={async () => {
          await DisplayStaticJson();  // leaving this in because I think we'll need it when ViewDatasets actually shows datasets 
        }}
      >
        <button onClick={DisplayStaticJson}>Available Datasets</button>
      </form>
    );
  }