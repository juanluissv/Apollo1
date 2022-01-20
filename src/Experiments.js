import { Query } from 'react-apollo';
import { experimentsSubmitted , experimentsApproved, experimentsProvisioning, experimentsUnderway } from './experimentQuery';


const  Recipes = () => {

    return (
        <div className="experiment">
        <Query query={experimentsSubmitted}>
            {({ data, loading, error }) => {

                if (loading) return <p>Loading ...</p>
                if (error) return <p>Something went wrong</p>

                return (
                    <div className="container">
                        <h2>Submitted</h2>
                    {data.experiments.map(({ id, title, subtitle, name, status }) =>
                        <div className="experiments" key={id}>
                            <h4>{title}</h4>
                            <p> {subtitle}</p>
                            <p>{name}</p>
                            <p>{status}</p>
                        </div>
                        )}
                 </div>
                )
            }}
        </Query>
        <Query query={experimentsApproved}>
        {({ data, loading, error }) => {

            if (loading) return <p>Loading ...</p>
            if (error) return <p>Something went wrong</p>

            return (
                <div className="container">
             <h2>Approved</h2>
                {data.experiments.map(({ id, title, subtitle, name, status }) =>
                    <div className="experiments" key={id}>
                        <h4>{title}</h4>
                        <p> {subtitle}</p>
                        <p>{name}</p>
                        <p>{status}</p>
                    </div>
                    )}
             </div>
            )
        }}
        </Query>
        <Query query={experimentsProvisioning}>
        {({ data, loading, error }) => {

            if (loading) return <p>Loading ...</p>
            if (error) return <p>Something went wrong</p>

            return (
                <div className="container">
                <h2>Provisioning</h2>
                {data.experiments.map(({ id, title, subtitle, name, status }) =>
                    <div className="experiments" key={id}>
                        <h4>{title}</h4>
                        <p> {subtitle}</p>
                        <p>{name}</p>
                        <p>{status}</p>
                    </div>
                    )}
             </div>
            )
        }}
        </Query>
        <Query query={experimentsUnderway}>
        {({ data, loading, error }) => {

            if (loading) return <p>Loading ...</p>
            if (error) return <p>Something went wrong</p>

            return (
                <div className="container">
                <h2>Underway</h2>
                {data.experiments.map(({ id, title, subtitle, name, status }) =>
                    <div className="experiments" key={id}>
                        <h4>{title}</h4>
                        <p> {subtitle}</p>
                        <p>{name}</p>
                        <p>{status}</p>
                    </div>
                    )}
             </div>
            )
        }}
        </Query>
    </div>
   )
}
export default Recipes