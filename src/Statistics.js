import React from 'react';

export default (props) => {
  const inputValues = props.nums;

  const sum = inputValues.reduce((prev, curr) => prev + curr );
  const avg = average(inputValues);//sum/inputValues.length;
  const median = computeMedian(inputValues);
  const mode = modeFunction(inputValues);
  const std = standardDeviation(inputValues);
    <div>
      <div>Sum = {sum}, Average = {avg}, Median = {median}, Mode = {mode}, Standard Deviation {std}</div>
    </div>
  );
};

function computeMedian(values) {
  values.sort((a, b) => a - b);
  let lowMiddle = Math.floor((values.length - 1) / 2);
  let highMiddle = Math.ceil((values.length - 1) / 2);
  let median = (values[lowMiddle] + values[highMiddle]) / 2;
  return median;
}

function modeFunction(array)
{
    if(array.length == 0)
    	return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
    	var el = array[i];
    	if(modeMap[el] == null)
    		modeMap[el] = 1;
    	else
    		modeMap[el]++;
    	if(modeMap[el] > maxCount)
    	{
    		maxEl = el;
    		maxCount = modeMap[el];
    	}
    }
    return maxEl;
}

function standardDeviation(values){
  var avg = average(values);

  var squareDiffs = values.map(function(value){
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });

  var avgSquareDiff = average(squareDiffs);

  var stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}

function average(data){
  var sum = data.reduce(function(sum, value){
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg;
}
// median = 13,5
//Sum = 3.2, Average = 12.6, Median = 4, Mode = 1, Standard Deviation 2.1
