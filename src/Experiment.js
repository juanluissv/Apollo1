import React from 'react';
import { jsx } from '@emotion/react/macro'
import styled from '@emotion/styled'

const ExperimentCard = styled.div({
    marginTop: '0px',
    marginBottom: '10px',
    border: '1px solid #fff',
    boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    display: 'flex',
})

const ExperimentPriority = styled.div({
    background: '#F7F7F7',
    border: '1px solid #F7F7F7',
    padding: '60px 10px',
    fontFamily: 'Roboto',
    color: '#747474',

})

const ExperimentContent = styled.div({
    padding: '0px 10px'

})
const ExperimentTitle = styled.p({
    color: '#008844',
    fontWeight: '600',
    fontSize: '20px',
    fontFamily: 'Roboto',
})

const ExperimentSubTitle = styled.p({
     fontFamily: 'Roboto',
     fontSize: '12px',
})

const ExperimentSubCard = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
})
const OpenButton = styled.p({
    border: '2px solid #008844',
    color: '#008844',
    borderRadius: '28px',
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: '12px',
    textAlign: 'center',
    padding:'5px 26px 5px',
    marginLeft: '2em'
})


const ExperimentOwner = styled.div({
    marginTop: '10px',
    background: '#F7F7F7',
    borderRadius: '37px',
    display: 'flex',
    height: '35px',
 })
const Profile = styled.div({
    padding: '7px 8px',
    fontSize: '14px',
    background: '#A7FFE0',
    borderRadius: '30px'
  })

  const Name = styled.p({
    fontSize: '12px',
    fontFamily: 'Roboto',
    width: '95px',
    textAlign: 'center',
  })



const Experiment = ({experiment}) => {

    return (
        <ExperimentCard>
          <ExperimentPriority>1</ExperimentPriority>

          <ExperimentContent>
            <ExperimentTitle>{experiment.title}</ExperimentTitle>
            <ExperimentSubTitle>{experiment.subtitle}</ExperimentSubTitle>

            <ExperimentSubCard>
                <ExperimentOwner>
                    <Profile>AC</Profile>
                    <Name>{experiment.name}</Name>
                </ExperimentOwner>
                <OpenButton>OPEN</OpenButton>
            </ExperimentSubCard>

          </ExperimentContent>
        </ExperimentCard>
    )
}

export default Experiment