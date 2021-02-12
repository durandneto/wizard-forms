import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';

const CancerTable = (props: any) => {
  const { Cancer }  = useContext(AppContext)
  const { FamilyMember } = Cancer
  return (
    <Table size="sm" hover>
      <thead>
        <tr>
          <th>Age of diagnosis</th>
          <th>Relationship</th>
          <th>Material or Paternal</th>
          <th>Patiente Age</th>
          <th>Type of Cancer</th>
        </tr>
      </thead>
      <tbody>
        {
          FamilyMember.list.map((fm: any) => (
            <tr>
              <td>{fm.ageOfDiagnosis}</td>
              <td>{fm.relationship}</td>
              <td>{fm.materialOrPaternal}</td>
              <td>{fm.age}</td>
              <td>{fm.typeOfCancer}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default CancerTable;