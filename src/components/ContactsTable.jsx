import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination, Skeleton } from '@mui/material';


const tableSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
  <TableRow
    key={item}
    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  >
    <TableCell><Skeleton /></TableCell>
    <TableCell><Skeleton /></TableCell>
    <TableCell><Skeleton /></TableCell>
  </TableRow>
));

const LIMIT = 10;

export default function ContactsTable() {

	const [response, setResponse] = useState(null);
	const [offset, setOffset] = useState(0);

  const navigate = useNavigate();

	useEffect(() => {

		const getContacts = async () => {

			const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contacts`);
			const data = await res.json();
			setResponse(data);
			
		}

		getContacts();

	}, []);

	const handlePageChange = async (event, page) => {

		const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contacts?offset=${LIMIT * page}`);
		const data = await res.json();
		setResponse(data);
		setOffset(LIMIT * page);
		
	}


  return (
    <>
      <TableContainer component={Paper} sx={{ width: 940, margin: "0 auto" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 225}}>Name</TableCell>
              <TableCell align="right" sx={{ width: 225}}>Last name</TableCell>
              <TableCell align="right" >Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {response ? (
              response.results.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 }, cursor: 'pointer' }}
                  hover
                  onClick={() => navigate(row._id) }
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                  <TableCell align="right">{row.company}</TableCell>
                </TableRow>
              ))
            ) : (
							tableSkeleton
							)
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ width: 940, margin: "0 auto" }}
        component="div"
        rowsPerPageOptions={[LIMIT]}
        rowsPerPage={LIMIT} // limit
        count={response?.totalRecords || 0} // totalRecords
        page={offset / LIMIT} // offset / limit
				onPageChange={handlePageChange}
      />
    </>
  );
}