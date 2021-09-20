import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function SearchResult(props) {
  const rows = props.meteorites;

  return (
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Id</Th>
            <Th>Nametype</Th>
            <Th>Rec Class</Th>
            <Th>Mass (g)</Th>
            <Th>Fall</Th>
            <Th>Year</Th>
            <Th>Latitude</Th>
            <Th>Longitude</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows.map(row=>(
            <Tr>
              <Td>{row['name']}</Td>
              <Td>{row['id']}</Td>
              <Td>{row['nametype']}</Td>
              <Td>{row['recclass']}</Td>
              <Td>{row['mass']}</Td>
              <Td>{row['fall']}</Td>
              <Td>{row['year']}</Td>
              <Td>{row['reclat']}</Td>
              <Td>{row['reclong']}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
  );
}