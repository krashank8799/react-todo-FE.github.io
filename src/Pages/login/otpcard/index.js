import React from "react";
import style from "./style.module.css";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import AddIcon from "@mui/icons-material/Check";
import LoadingIcon from "@mui/material/CircularProgress";

export default function OtpCard(props) {
  return (
    <div className={style.container}>
      <h3>Enter OTP </h3>{" "}
      <Input
        placeholder="Enter OTP"
        value={props.value}
        onChange={props.onChange}
        type={"number"}
        iref={props.otpRef}
      />{" "}
      <Button onClick={props.onOtpSubmit} variant="filled" disabled = {props.isButtonDisabled}>
        {" "}
        {props.isLoading ? (
          <LoadingIcon style={{ width: 20, height: 20 }}/>
        ) : (
          <>
            {" "}
            <AddIcon />
            Submit{" "}
          </>
        )}{" "}
      </Button>
    </div>
  );
}
