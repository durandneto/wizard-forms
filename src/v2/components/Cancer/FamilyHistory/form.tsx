import { CancerFamilyMemberInterface } from "../../../Reducer/Cancer/Cancer.model";

interface FamilyMemberForm {
  familyMember: CancerFamilyMemberInterface;
}
const FamilyMemberForm = ({ familyMember }: FamilyMemberForm) => {
  return <h2>New Family Member {familyMember.id}</h2>;
};
export default FamilyMemberForm;
