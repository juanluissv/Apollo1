import { jsx } from '@emotion/react/macro'
import styled from '@emotion/styled'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import { FormControl, TextField } from '@mui/material'
import React from 'react';

const FilterWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid #E1E1E1',
  alignItems: 'center',
  paddingTop: '5px'
})

const CardsWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '20px',
  alignItems: 'center'

})
const FilterTitle = styled.h3({
  fontFamily: 'Roboto',
  lineHeight: '24px',
  fontWeight: '600',
  marginRight: '30px',
  letterSpacing: '0.5px',
})


const CardSelected = styled.div({
  fontFamily: 'Roboto',
  borderBottom: '3px solid #008844',
  paddingTop: '2px',
  marginLeft: '3px',
  marginRight: '15px',
  fontSize: '13px',
  color: '#008844',
  fontWeight: '600',
  display: 'flex',
})

const Card = styled.p({
  fontFamily: 'Roboto',
  marginLeft: '3px',
  marginRight: '15px',
  fontSize: '13px',
  fontWeight: '500'
})


const ButtonsWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginRight: '5px'
})


const SearchBar =  styled.input({
  fontSize: '12px',
  padding: '5px',
  border: '1px solid #cecece',
  borderRadius: '5px',
  color: "#111",
  width: '12em',
  marginRight: '15px',
  height: '20px'
})

const FilterForm =  styled.select({
  fontSize: '12px',
  padding: '5px',
  border: '1px solid #cecece',
  borderRadius: '5px',
  color: "#909090",
  width: '13em',
  marginRight: '15px',
  letterSpacing: '0.5px',
  height: '32px'
})
const ExperimentButton = styled.p({
  backgroundColor:'#008844',
	borderRadius:'28px',
	border:'1px solid #18ab29',
	cursor:'pointer',
	color:'#fff',
	fontFamily:'Roboto',
	fontSize:'12px',
  padding:'10px 20px',
  marginRight: '10px'

})
const Filters = () => {

  return (
    <FilterWrapper>
      <CardsWrapper>
        <FilterTitle>Experiment tracker</FilterTitle>
        <CardSelected><ViewAgendaOutlinedIcon sx={{ fontSize: 16}} />Active cards</CardSelected>
        <MenuOutlinedIcon sx={{ fontSize: 16}} /><Card>Active details</Card>
        <FolderOutlinedIcon sx={{ fontSize: 16}} /><Card>Completed archive</Card>
        <CreateOutlinedIcon sx={{ fontSize: 16}} /><Card>Drafts</Card>
      </CardsWrapper>

      <ButtonsWrapper>
      <SearchBar  type="text" placeholder="Search"  />
      <FilterForm  placeholder="Filter" >
        <option>Filter</option>
      </FilterForm>
      <ExperimentButton>+ CREATE EXPERIMENT</ExperimentButton>

      </ButtonsWrapper>


        </FilterWrapper>
    )
}

export default Filters