import React, { useState } from 'react';
import data1 from 'json_datasets/sample1.json';
import data2 from 'json_datasets/sample2.json';
import data3 from 'json_datasets/sample3.json';



export function DisplayStaticJson() {
    return (
        <div>
            <h1>Data from File 1</h1>
            <pre>{JSON.stringify(data1, null, 2)}</pre>
            <h1>Data from File 2</h1>
            <pre>{JSON.stringify(data2, null, 2)}</pre>
            <h1>Data from File 3</h1>
            <pre>{JSON.stringify(data3, null, 2)}</pre>
        </div>
    );
};

