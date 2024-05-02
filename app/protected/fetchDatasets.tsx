import React, { useState } from 'react';
import data1 from 'json_datasets/sample1.json';
import data2 from 'json_datasets/sample2.json';
import data3 from 'json_datasets/sample3.json';



export function FetchDatasets() {
    return (
        <label>
            Choose dataset:
            <select name="selectedDataset">
                <option value="sample1"> Sample1 </option>
                <option value="sample2"> Sample2 </option>
                <option value="sample3"> Sample3 </option>
            </select>
        </label>
    );
};

