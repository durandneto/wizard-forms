import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileInterface } from '../../../context/Profile.Contex';

const MedicareTable = (props: any) => {

  const { Profile }  = useContext(AppContext)
  const { tabs: { Medicare : { data: Medicare} } } = Profile

  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          <th>Medicare memberID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Medicare.memberID}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MedicareTable;