import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileInterface } from '../../../context/Profile.Contex';

const AddressTable = (props: any) => {
  const { Cancer, updateContext, Error }  = useContext(AppContext)
  const { tabs: { Diagnostic : { data: Diagnostic } } } = Cancer
  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          <th>Diagnosed</th>
          <th>Prescribed Medications</th>
          <th>Diabetes Type</th>
          <th>Prescribed medications and all OTC</th>
          <th>Is RCE Cancer transfer?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Diagnostic.indicationTest}</td>
          <td>{Diagnostic.isDiagnosed ? 'Yes' : 'No'}</td>
          <td>{Diagnostic.treatment}</td>
          <td>{Diagnostic.OTC}</td>
          <td>{Diagnostic.isRCECancerTransfer ? 'Yes' : 'No'}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AddressTable;