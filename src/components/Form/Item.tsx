import {
    InputGroup,
    Input,
    FormGroup,
    Label,
    FormFeedback,
   } from 'reactstrap';

const FormItem = ({type = "text", error, onChange, label, placeholder, id, loading, disabled, value, appendAddon}: any) => (
    <FormGroup className="position-relative">
    <Label for={id}>{label}</Label>
    <InputGroup>
      <Input 
        invalid={error}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
        value={value}
        disabled={loading || disabled}
        type={type}
      />
      {appendAddon && appendAddon()}
      <FormFeedback tooltip>{error}</FormFeedback>
    </InputGroup>
  </FormGroup>
  )

  export default FormItem