import { jsx } from '@emotion/react/macro'
import styled from '@emotion/styled'
import SortIcon from '@mui/icons-material/Sort';
import { Query } from 'react-apollo';

import Experiment from './Experiment'
import { experimentsApproved, experimentsProvisioning, experimentsSubmitted, experimentsUnderway } from './experimentQuery';

const WrapperSubmitted = styled.div({
    display: 'flex',
    borderBottom: '3px solid #FDC24B'
})
const WrapperApproved = styled.div({
    display: 'flex',
    borderBottom: '3px solid #8DD615'
})
const WrapperProvisioning = styled.div({
    display: 'flex',
    borderBottom: '3px solid #5FECFD'
})
const WrapperUnderway = styled.div({
    display: 'flex',
    borderBottom: '3px solid #B4C3FF'
})

const ColumnTitle = styled.p({
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: '16px',
    letterSpacing: '0.1px',
    color: '#000000',
    paddingLeft: '10px'
})
const ExperimentBorder = styled.div({
    borderLeft: '1px solid #EAEAEA',
    borderRight: '1px solid #EAEAEA',
    padding: '0px 6px',

})

const  ExperimentsCards = () => {

    return (
        <div className="experiments">
        <Query query={experimentsSubmitted}>
            {({ data, loading, error }) => {

                if (loading) return <p>Loading ...</p>
                if (error) return <p>Something went wrong</p>

                return (
                    <div>
                    <WrapperSubmitted>
                      <ColumnTitle>Submitted</ColumnTitle>
                      <SortIcon sx={{ fontSize: 17, marginTop: 2, marginLeft: 0.3}} />
                      </WrapperSubmitted>
                      <ExperimentBorder>

                    {data.experiments.map(experiment =>
                          <Experiment key={experiment.id} experiment={experiment} />
                    )}
                    </ExperimentBorder>
                    </div>
                )
            }}
        </Query>


         <Query query={experimentsApproved}>
         {({ data, loading, error }) => {

            if (loading) return <p>Loading ...</p>
            if (error) return <p>Something went wrong</p>

            return (
                <div>
                <WrapperApproved>
                      <ColumnTitle>Approved</ColumnTitle>
                      <SortIcon sx={{ fontSize: 17, marginTop: 2, marginLeft: 0.3}} />
                </WrapperApproved>
                <ExperimentBorder>
                {data.experiments.map(experiment =>
                    <Experiment key={experiment.id} experiment={experiment} />
                )}
                </ExperimentBorder>
                </div>
            )
            }}
            </Query>




        <Query query={experimentsProvisioning}>
        {({ data, loading, error }) => {

            if (loading) return <p>Loading ...</p>
            if (error) return <p>Something went wrong</p>

            return (
                <div>
                <WrapperProvisioning>
                      <ColumnTitle>Provisioning</ColumnTitle>
                      <SortIcon sx={{ fontSize: 17, marginTop: 2, marginLeft: 0.3}} />
                </WrapperProvisioning>
                <ExperimentBorder>
                {data.experiments.map(experiment =>
                    <Experiment key={experiment.id} experiment={experiment} />
                )}
                </ExperimentBorder>
                </div>
            )
            }}
            </Query>



        <Query query={experimentsUnderway}>
        {({ data, loading, error }) => {

            if (loading) return <p>Loading ...</p>
            if (error) return <p>Something went wrong</p>

            return (
                <div>
                <WrapperUnderway>
                      <ColumnTitle>Underway</ColumnTitle>
                      <SortIcon sx={{ fontSize: 17, marginTop: 2, marginLeft: 0.3}} />
                </WrapperUnderway>
                <ExperimentBorder>
                {data.experiments.map(experiment =>
                    <Experiment key={experiment.id} experiment={experiment} />
                )}
                </ExperimentBorder>
                </div>
            )
            }}
        </Query>

    </div>
   )
}
export default ExperimentsCards