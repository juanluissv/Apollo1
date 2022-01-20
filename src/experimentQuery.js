import gql from 'graphql-tag';

const experimentsSubmitted =  gql`
  query {
    experiments (status: "submitted") {
        id
        title
        subtitle
        name
        status
    }
  }
`;

const experimentsApproved =  gql`
    query {
        experiments (status: "approved") {
            id
            title
            subtitle
            name
            status
        }
    }
`;

const experimentsProvisioning =  gql`
    query {
        experiments (status: "provisioning") {
            id
            title
            subtitle
            name
            status
        }
    }
`;

const experimentsUnderway =  gql`
    query {
        experiments (status: "underway") {
            id
            title
            subtitle
            name
            status
        }
    }
`;


export { experimentsSubmitted, experimentsApproved, experimentsProvisioning, experimentsUnderway }