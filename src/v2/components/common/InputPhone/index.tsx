import React from "react";
import MaskedInput from "react-text-mask";
import Input from "@material-ui/core/Input";
import { TextField } from "@material-ui/core";

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

export default function InputPhone({
  value,
  onChange,
  name,
  id,
  error,
  label,
  helperText,
  placeholder,
}: any) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      fullWidth
      InputProps={{
        inputComponent: TextMaskCustom as any,
      }}
      id={id}
      label={label}
      error={error}
      style={{ margin: 8 }}
      placeholder={placeholder}
      helperText={helperText}
      InputLabelProps={{
        shrink: true,
      }}
      margin="dense"
      variant="outlined"
      name={name}
    />
  );
}
