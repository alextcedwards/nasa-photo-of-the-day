import React from 'react';

export default function Explain(props) {
  const { nasaData } = props;

  return (
    <div className="explain">
      <p>{nasaData.explanation}</p>
    </div>
  );
}
