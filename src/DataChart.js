// ChartWithFilter.js
import React, { useState, useEffect, useRef } from 'react';
import './ChartWithFilter.css';

const ChartWithFilter = () => {
  const [filter, setFilter] = useState('');
  const [filterType, setFilterType] = useState('topic'); // Default filter type
  const chartRef = useRef(null);

  const data = [
    {
      "end_year": "",
      "intensity": 6,
      "sector": "Energy",
      "topic": "gas",
      "insight": "Annual Energy Outlook",
      "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
      "region": "Northern America",
      "start_year": "",
      "impact": "",
      "added": "January, 20 2017 03:51:25",
      "published": "January, 09 2017 00:00:00",
      "country": "United States of America",
      "relevance": 2,
      "pestle": "Industries",
      "source": "EIA",
      "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
      "likelihood": 3
    },
    {
        "end_year": "",
        "intensity": 6,
        "sector": "Energy",
        "topic": "oil",
        "insight": "Annual Energy Outlook",
        "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
        "region": "Northern America",
        "start_year": "",
        "impact": "",
        "added": "January, 20 2017 03:51:24",
        "published": "January, 09 2017 00:00:00",
        "country": "United States of America",
        "relevance": 2,
        "pestle": "Industries",
        "source": "EIA",
        "title": "Reference case U.S. crude oil production is projected to recover from recent declines.",
        "likelihood": 3
      },
    // Add other data objects as needed
  ];

  const filteredData = data.filter((item) => {
    const filterText = filter.toLowerCase();
    switch (filterType) {
      case 'topic':
        return item.topic.toLowerCase().includes(filterText);
      case 'sector':
        return item.sector.toLowerCase().includes(filterText);
      case 'region':
        return item.region.toLowerCase().includes(filterText);
      // Add cases for other filter types as needed
      default:
        return true;
    }
  });


  const applyFilter = () => {
    // No need to update or re-render for a table
  };

  const filterOptions = ['topic', 'sector', 'region', 'source', 'country', 'pestel', 'end year'];

  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <select
        id="filter"
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="filter-select"
      >
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder={`Enter ${filterType} filter text`}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-input"
      />

      <table className="data-table">
        <thead>
          <tr>
            <th>End Year</th>
            <th>Intensity</th>
            <th>Sector</th>
            <th>Topic</th>
            <th>Insite</th>
            <th>URL</th>
            <th>Region</th>
            <th>Start Year</th>
            <th>Impact</th>
            <th>Added</th>
            <th>Published</th>
            <th>Country</th>
            <th>Relevance</th>
            <th>Pestle</th>
            <th>Source</th>
            <th>Title</th>
            <th>Likelihood</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.end_year}</td>
              <td>{item.intensity}</td>
              <td>{item.sector}</td>
              <td>{item.topic}</td>
              <td>{item.insight}</td>
              <td>{item.url}</td>
              <td>{item.region}</td>
              <td>{item.start_year}</td>
              <td>{item.impact}</td>
              <td>{item.added}</td>
              <td>{item.published}</td>
              <td>{item.country}</td>
              <td>{item.relevance}</td>
              <td>{item.pestle}</td>
              <td>{item.source}</td>
              <td>{item.title}</td>
              <td>{item.likelihood}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChartWithFilter;
