import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Container, Row, Col } from 'react-bootstrap';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  // Define the columns for the DataTable
  const columns = [
    {
      name: 'Course ID',
      selector: row => row.course_id,
      sortable: true,
    },
    {
      name: 'Course Name',
      selector: row => row.course_name,
      sortable: true,
    },
    {
      name: 'Syllabus',
      selector: row => row.syllabus,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
    },
  ];

  // Custom styles for the DataTable
  const customStyles = {
    rows: {
      style: {
        minHeight: '60px', // Optimize row height
        fontWeight: 'normal',
        color: '#333', // Slightly lighter font color for better readability
      },
    },
    headCells: {
      style: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: '16px',
        paddingLeft: '12px',
        paddingRight: '12px',
        backgroundColor: '#f8f9fa', // Light gray background for header cells
        borderBottom: '2px solid #e0e0e0', // Subtle border for header
      },
    },
    cells: {
      style: {
        paddingLeft: '12px',
        paddingRight: '12px',
        fontSize: '14px',
      },
    },
  };

  // Function to fetch course data from the API
  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5002/view_allcourses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Use effect to fetch data when component is mounted
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center my-4">
        <Col md={8} className="text-center">
          <h2 className="font-weight-bold">Available Courses</h2>
          {/* <p className="text-muted">Browse through the list of courses available in our system.</p> */}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12}>
          <DataTable
            columns={columns}
            data={courses}
            customStyles={customStyles}
            pagination
            paginationPerPage={10}
            fixedHeader
            highlightOnHover
            responsive
            noHeader
            striped
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
