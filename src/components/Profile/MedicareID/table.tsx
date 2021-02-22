import { useContext } from "react";
import { Table } from "reactstrap";
import { AppContext } from "../../../context/App.Contex";
import { ProfileInterface } from "../../../context/Profile.Contex";

const MedicareTable = (props: any) => {
  const { Profile } = useContext(AppContext);
  const {
    tabs: {
      MediCare: { data: MediCare },
    },
  } = Profile;

  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          <th>MediCare memberID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{MediCare.memberID}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default MedicareTable;
