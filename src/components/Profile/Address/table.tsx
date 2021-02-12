import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileInterface } from '../../../context/Profile.Contex';

const AddressTable = (props: any) => {
  const { Profile }  = useContext(AppContext)
  const { Address } = Profile
  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          <th>Full Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{`${Address.streetLine}, ${Address.city} - ${Address.state} ${Address.postalCode}`}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AddressTable;