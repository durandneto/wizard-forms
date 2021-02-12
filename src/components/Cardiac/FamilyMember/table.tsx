import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';

const CardiacTable = (props: any) => {
  const { Cardiac }  = useContext(AppContext)
  const { FamilyMember } = Cardiac
  return (
    <Table size="sm" hover>
      <thead>
        <tr>
          <th>Condition Date</th>
          <th>Relationship</th>
          <th>Material or Paternal</th>
          <th>Patiente Age</th>
          <th>Type of Cardiac</th>
          <th>Heart Conditions</th>
        </tr>
      </thead>
      <tbody>
        {
          FamilyMember.list.map((fm: any) => (
            <tr>
              <td>{fm.conditionDate}</td>
              <td>{fm.relationship}</td>
              <td>{fm.materialOrPaternal}</td>
              <td>{fm.age}</td>
              <td>{fm.typeOfCardiac}</td>
              <td>{fm.heartConditions.join(", ")}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default CardiacTable;