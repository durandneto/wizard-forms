import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';

const AddressTable = (props: any) => {
  const { Agent }  = useContext(AppContext)
  const { tabs: { Info : { data: Info } } } = Agent
  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          <th>Recording URL</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Info.url}</td>
          <td>{Info.name}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AddressTable;