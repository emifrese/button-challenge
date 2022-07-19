import React from "react";
import Button from "../components/Button/Button";
import ButtonsWrappers from "../components/Button/ButtonsWrappers";

import settings_accessibility from "../assets/settings_accessibility_FILL0_wght400_GRAD0_opsz48.svg";
import bolt from "../assets/bolt_FILL0_wght400_GRAD0_opsz48.svg";
import map from "../assets/map_FILL0_wght400_GRAD0_opsz48.svg";
import add_person from "../assets/person_add_FILL0_wght400_GRAD0_opsz48.svg";
import add_shopping_cart from "../assets/add_shopping_cart_FILL0_wght400_GRAD0_opsz48.svg";
import SideBar from "../components/SideBar/SideBar";
import ButtonPageWrapper from "../components/UI/ButtonPageWrapper";

const ButtonPage = () => {
  return (
      <ButtonPageWrapper>
        <SideBar />
        <ButtonsWrappers>
          <Button />
          <Button variant="outline" />
          <Button variant="text" />
          <Button disabledShadow />
          <Button disabled />
          <Button variant="text" disabled />
          <Button
            startIcon={settings_accessibility}
            iconName={"settings_accessibility"}
          />
          <Button endIcon={bolt} iconName={"bolt"} />
          <Button size="sm" />
          <Button size="md" />
          <Button size="lg" />
          <Button color="default" />
          <Button color="primary" />
          <Button color="secondary" />
          <Button color="danger" />
        </ButtonsWrappers>
      </ButtonPageWrapper>
  );
};

export default ButtonPage;
