import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Container, Row, Col } from 'react-bootstrap';

function Batch() {
  const [item, setItem] = useState([]);

  const columns = [
    {
      name: 'Batch_ID',
      selector: row => row.batch_id,
    },
    {
      name: 'Teacher_ID',
      selector: row => row.teacher_id,
    },
    {
      name: 'Course_Id',
      selector: row => row.course_id,
    },
    {
      name: 'Batch_Name',
      selector: row => row.batch_name,
    },
    {
      name: 'Start_Date',
      selector: row => row.start_date,
    },
    {
      name: 'End_Date',
      selector: row => row.end_date,
    },
    {
      name: 'Mode',
      selector: row => row.mode,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px',
        fontWeight: 'bold',
        color: 'black',
      },
    },
    headCells: {
      style: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: '18px',
        paddingLeft: '8px',
        paddingRight: '8px',
        backgroundColor: '#8DECB4',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
        fontSize: '15px',
      },
    },
  };

  const getData = () => {
    axios.get('http://localhost:5002/view_batch')
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-center">
            <h3>Batch</h3>
          </div>
          <DataTable
            columns={columns}
            data={item}
            customStyles={customStyles}
            pagination
            highlightOnHover
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Batch;

