import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileInterface } from '../../../context/Profile.Contex';

const AddressTable = (props: any) => {
  const { Diabetes, updateContext, Error }  = useContext(AppContext)
  const { Diagnostic } = Diabetes
  return (
    <Table size="sm" hover>
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