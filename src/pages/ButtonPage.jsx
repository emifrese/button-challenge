import React from "react";
import Button from "../components/Button/Button";
import ButtonsWrappers from "../components/Button/ButtonsWrappers";

const ButtonPage = () => {
  return (
    <>
      <div>ButtonPage</div>
      <ButtonsWrappers>
        <Button />
        <Button variant='outline'/>
        <Button variant='text'/>
        <Button disabledShadow/>
        <Button disabled/>
        <Button variant='text' disabled/>
      </ButtonsWrappers>
    </>
  );
};

export default ButtonPage;
