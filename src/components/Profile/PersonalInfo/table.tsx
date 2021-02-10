import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileInterface } from '../../../context/Profile.Contex';

const ProfileTable = (props: any) => {

  const { Profile }  = useContext(AppContext)
  const { PersonalInfo } = Profile
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
          <td>{PersonalInfo.firstName}</td>
          <td>{PersonalInfo.lastName}</td>
          <td>{PersonalInfo.gender}</td>
          <td>{`${PersonalInfo.phoneCode} ${PersonalInfo.phone}`}</td>
          <td>{`${PersonalInfo.altPhoneCode} ${PersonalInfo.altPhone}`}</td>
          <td>{PersonalInfo.email}</td>
          <td>{PersonalInfo.birthdate}</td>
          <td>{PersonalInfo.ethnicity}</td>
          <td>{PersonalInfo.previousTests.join(",")}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ProfileTable;