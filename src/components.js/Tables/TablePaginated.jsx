import * as React from "react";
import PropTypes from "prop-types";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import {Link} from "@reach/router";
function TablePaginationActions(props) {
  const theme = useTheme();
  const {count, page, rowsPerPage, onPageChange} = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{flexShrink: 0, ml: 2.5}}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}

/*
 <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>


*/

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function TablePaginated(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  //const rows=[]

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - props.employees.length)
      : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{marginTop: "30px"}}>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 500}} aria-label='custom pagination table'>
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
              <TableCell align='right'>X</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? props.employees.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : props.employees
            ).map((row) => (
              <TableRow
                key={row._id}
                sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell
                  style={{
                    backgroundColor: "#0f1279",
                    fontSize: "1em",
                    color: "#fff",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                  component='th'
                  scope='row'
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                    to={row._id}
                  >
                    {row.name}
                  </Link>
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
                <TableCell
                  onClick={() => props.delEmp(row._id)}
                  style={{
                    fontSize: "1em",
                    fontWeight: "bold",
                    color: "red",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                  align='right'
                >
                  X
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{height: 53 * emptyRows}}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                onClick={() => props.paginateNextOne()}
                rowsPerPageOptions={[5, 10, 25, {label: "All", value: -1}]}
                colSpan={3}
                count={props.employees.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
//TablePagination  onClick={() => props.paginateNext()}
