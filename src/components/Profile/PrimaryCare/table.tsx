import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileInterface } from '../../../context/Profile.Contex';

const PrimaryCareTable = (props: any) => {
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
          <td>{props.context.fullName}</td>
          <td>{props.context.phone}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default PrimaryCareTable;