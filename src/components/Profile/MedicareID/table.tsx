import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileInterface } from '../../../context/Profile.Contex';

const MedicareTable = (props: any) => {
  return (
    <Table size="sm" hover>
      <thead>
        <tr>
          <th>Medicare memberID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.context.memberID}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MedicareTable;