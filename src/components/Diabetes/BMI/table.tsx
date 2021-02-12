import { useContext } from 'react';
import { Table } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';

const BMITable = (props: any) => {
  const { Diabetes }  = useContext(AppContext)
  const { BMI } = Diabetes
  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          <th>BMI</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{BMI.value}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BMITable;