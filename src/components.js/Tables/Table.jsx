import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const NiceTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>Phone number</TableCell>
            <TableCell align='right'>City</TableCell>
            <TableCell align='right'>Zip code</TableCell>
            <TableCell align='right'>Address</TableCell>
            <TableCell align='right'>Address (alt)</TableCell>
            <TableCell align='right'>Employed since</TableCell>
            <TableCell align='right'>Date of birth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.employees.map((row) => (
            <TableRow
              key={row.id}
              sx={{"&:last-child td, &:last-child th": {border: 0}}}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.email}</TableCell>
              <TableCell align='right'>{row.phoneNumber}</TableCell>
              <TableCell align='right'>{row.homeAddress.city}</TableCell>
              <TableCell align='right'>{row.homeAddress.ZIPCode}</TableCell>
              <TableCell align='right'>
                {row.homeAddress.addressLine1}
              </TableCell>
              <TableCell align='right'>
                {row.homeAddress.addressLine2}
              </TableCell>
              <TableCell align='right'>{row.dateOfEmployment}</TableCell>
              <TableCell align='right'>{row.dateOfBirth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NiceTable;
