```javascript
// bugSolution.js

// Functional Component Solution
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Data: {data.name}</h1>
    </div>
  );
}

// Class Component Solution
import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    if (this.state.data === null) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>Data: {this.state.data.name}</h1>
      </div>
    );
  }
}
export default MyComponent;
```