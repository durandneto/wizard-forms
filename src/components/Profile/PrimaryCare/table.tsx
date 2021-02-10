import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileInterface } from '../../../context/Profile.Contex';

const PrimaryCareTable = (props: any) => {
  const { Profile }  = useContext(AppContext)
  const { PrimaryCare } = Profile
  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          <th>Doctor fullname</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{PrimaryCare.fullName}</td>
          <td>{PrimaryCare.phone}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default PrimaryCareTable;