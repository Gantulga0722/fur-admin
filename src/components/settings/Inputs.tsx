import { InputBase, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export const AddFoodInfo = ({
  text,
  placehold,
  setFunction,
  value,
}: {
  text: string;
  placehold: string;
  setFunction: Dispatch<SetStateAction<any>>;
  value: any;
}) => {
  return (
    <Stack gap={"8px"}>
      <Stack
        height={"56px"}
        paddingX={"12px"}
        borderRadius={"8px"}
        bgcolor={"#F4F4F4"}
        justifyContent={"center"}
      >
        <InputBase
          placeholder={placehold}
          onChange={(e) => setFunction(`${e.target.value}`)}
        ></InputBase>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
        <Typography fontSize={"14px"} fontWeight={500} color={"#121316"}>
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
};
