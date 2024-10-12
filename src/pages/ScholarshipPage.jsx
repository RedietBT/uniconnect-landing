import React, { useEffect, useState } from 'react';

const ScholarshipPage = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await fetch('http://localhost:5000/scholarships'); // Adjust this URL as needed
        if (!response.ok) throw new Error('Failed to fetch scholarships');
        const data = await response.json();
        setScholarships(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Available Scholarships</h1>
      <ul className="list-disc pl-5">
        {scholarships.map((scholarship) => (
          <li key={scholarship.id} className="mb-2">
            <h2 className="font-semibold">{scholarship.title}</h2>
            <p>{scholarship.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScholarshipPage;
