import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileInterface } from '../../../context/Profile.Contex';

const AddressTable = (props: any) => {
  const { Cardiac, updateContext, Error }  = useContext(AppContext)
  const { Diagnostic } = Cardiac
  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          <th>Diagnosed</th>
          <th>Prescribed Medications</th>
          <th>Diabetes Type</th>
          <th>Prescribed medications and all OTC</th>
          <th>Is RCE cardio transfer?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Diagnostic.typeOfCardiac.join(", ")}.</td>
          <td>{Diagnostic.prescribedMedications}</td>
          <td>{Diagnostic.diabetesType}</td>
          <td>{Diagnostic.OTC}</td>
          <td>{Diagnostic.isRCECardioTransfer ? 'Yes' : 'No'}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AddressTable;