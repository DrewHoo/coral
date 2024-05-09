"use client"
import { auth, signOut } from 'app/auth';
import * as React from 'react';
// import { useFormStatus } from 'react-dom';
import { ViewDatasets } from './viewDatasets';
import { FetchDatasets } from './fetchDatasets';


export function Datasets() {
  const [selectedDataset, setSelectedDataset]=React.useState()
  console.log(selectedDataset)
  return (
    < >
    <ViewDatasets />
    <FetchDatasets setSelectedDataset={setSelectedDataset} />
    </>
  );
}
