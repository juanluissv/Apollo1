import styled from '@emotion/styled'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { Query } from 'react-apollo';

import { experimentsAll } from './experimentQuery';

const ExperimentsDetails = () => {

  const TableWrapper = styled.div({
    width: '90%',
    margin: '20px auto'
  })


  return (
    <TableWrapper>
      <Query query={experimentsAll}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading ...</p>
          if (error) return <p>Something went wrong</p>

          return (
            <div>
            {/* {data.experiments.map((experiment) => { */}

              <TableContainer  component={Paper} >
                <Table  aria-label="simple table" >
                  <TableHead >
                    <TableRow >
                      <TableCell align="right">Title</TableCell>
                      <TableCell align="right">Stage</TableCell>
                      <TableCell align="right">Priority</TableCell>
                      <TableCell align="right">Owner</TableCell>
                      <TableCell align="right">Updated</TableCell>
                      <TableCell align="right">Section Here</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {data.experiments.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="right">{row.title}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                        <TableCell align="right">1</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">08/23/2020</TableCell>
                        <TableCell align="right">Description content here</TableCell>

                      </TableRow>
                    ))}
                </TableBody>


                </Table>
              </TableContainer>

               {/* }
               )} */}

            </div>
          )
        }}
      </Query>
    </TableWrapper>
  )
}

export default ExperimentsDetails;