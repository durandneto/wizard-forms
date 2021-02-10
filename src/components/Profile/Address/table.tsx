import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileInterface } from '../../../context/Profile.Contex';

const AddressTable = (props: any) => {
  return (
    <Table size="sm" hover>
      <thead>
        <tr>
          <th>Full Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{`${props.context.streetLine}, ${props.context.city} - ${props.context.state} ${props.context.postalCode}`}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AddressTable;