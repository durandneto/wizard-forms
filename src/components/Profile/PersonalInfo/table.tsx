import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileInterface } from '../../../context/Profile.Contex';

const ProfileTable = (props: any) => {
  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Alt. Phone</th>
          <th>Email Address</th>
          <th>Birth Date</th>
          <th>Ethnicity</th>
          <th>Previous Tests only</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.context.firstName}</td>
          <td>{props.context.lastName}</td>
          <td>{props.context.gender}</td>
          <td>{`${props.context.phoneCode} ${props.context.phone}`}</td>
          <td>{`${props.context.altPhoneCode} ${props.context.altPhone}`}</td>
          <td>{props.context.email}</td>
          <td>{props.context.birthdate}</td>
          <td>{props.context.ethnicity}</td>
          <td>{props.context.previousTests.join(",")}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ProfileTable;