import { ButtonBase, Stack, Typography } from "@mui/material";
import { CircleIcon } from "../icons";
import { CreateStoreModal } from "../modals/CreateStoreModal";
import { useState } from "react";

export const InputElementField = ({
  text,
  buttonText,
}: {
  text: string;
  buttonText: string;
}) => {
  const [isModalOpenCate, setIsModalOpenCate] = useState(false);

  const onCloseModalCate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsModalOpenCate(false);
  };
  const onOpenModalCate = (e: any) => {
    e.stopPropagation();
    setIsModalOpenCate(true);
  };
  return (
    <Stack
      padding={"8px 12px 8px 8px"}
      alignItems={"center"}
      borderRadius={"8px"}
      bgcolor={"#FFF"}
      direction={"row"}
      border={"1px solid #ECEDF0"}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Stack
          width={"44px"}
          height={"44px"}
          padding={"8px 16px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack width={"11px"} height={"11px"}>
            <CircleIcon />
          </Stack>
        </Stack>
        <Stack
          padding={"0px 4px"}
          width={"447px"}
          justifyContent={"flex-start"}
        >
          <Typography
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"24px"}
            letterSpacing={"-0.3px"}
            color={"#121316"}
          >
            {text}
          </Typography>
        </Stack>
      </Stack>
      <ButtonBase onClick={onOpenModalCate}>
        <Stack
          minWidth={"80px"}
          padding={"8px 12px"}
          justifyContent={"center"}
          alignItems={"center"}
          border={"1px solid #D6D8DB"}
          borderRadius={"8px"}
        >
          <Typography
            fontSize={"14px"}
            fontWeight={600}
            lineHeight={"16px"}
            letterSpacing={"-0.2px"}
          >
            {buttonText}
          </Typography>
        </Stack>
      </ButtonBase>
      <CreateStoreModal isOpen={isModalOpenCate} onClose={onCloseModalCate} />
    </Stack>
  );
};
