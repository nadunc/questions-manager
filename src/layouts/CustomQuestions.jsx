import React from 'react';
import { Card } from 'react-bootstrap';
import DataTable from '../components/DataTable';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

export default function CustomQuestions() {
  return (
    <>
      <Header />
      <Card className="page-card shadow-sm">
        <Card.Body>
          <SearchForm />
        </Card.Body>
      </Card>

      <Card className="page-card shadow-sm">
        <Card.Body>
          <DataTable />
        </Card.Body>
      </Card>
    </>
  );
}
