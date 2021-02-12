import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';

const BMITable = (props: any) => {
  const { Diabetes }  = useContext(AppContext)
  const { FamilyMember } = Diabetes
  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Relationship to patient</th>
          <th>Diagnosis or Symptoms</th>
          <th>Age of onset</th>
        </tr>
      </thead>
      <tbody>
        {
          FamilyMember.list.map((fm: any) => (
            <tr>
              <td>{`${fm.firstName} ${fm.lastName}`}</td>
              <td>{fm.gender}</td>
              <td>{fm.birthDate}</td>
              <td>{fm.relationship}</td>
              <td>{fm.diagnosisOrSymptoms}</td>
              <td>{fm.ageOfOnset}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default BMITable;