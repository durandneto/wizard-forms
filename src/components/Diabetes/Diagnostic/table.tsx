import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileInterface } from '../../../context/Profile.Contex';

const AddressTable = (props: any) => {
  const { Diabetes }  = useContext(AppContext)
  const { tabs: { Diagnostic : { data: Diagnostic} } } = Diabetes
  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          <th>List of diagnostics</th>
          <th>Is RCE Diabetes transfer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Diagnostic.list.join(", ")}.</td>
          <td>{Diagnostic.isRCEDiabetesTransfer ? 'Yes' : 'No'}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AddressTable;