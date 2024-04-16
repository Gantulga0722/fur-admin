import { ButtonBase, Stack, Typography } from "@mui/material";
import { InputElementField } from "./InputElementField";

export const CreateStoreProfile = () => {
  return (
    <Stack
      width={"792px"}
      padding={"32px 29px"}
      gap={"20px"}
      borderRadius={"12px"}
      bgcolor={"#FFF"}
    >
      <Stack>
        <Typography
          fontSize={"18px"}
          fontWeight={600}
          lineHeight={"24px"}
          letterSpacing={"-0.3px"}
          color={"#121316"}
        >
          Дэлгүүрийн профайл үүсгэх
        </Typography>
      </Stack>
      <Stack gap={"8px"}>
        <InputElementField
          text={"Дэлгүүрийн төрлөө оруулна уу"}
          buttonText={"Дэлгүүрийн төрөл"}
        />
        <InputElementField
          text={"Эхний бүтээгдэхүүнээ нэмнэ үү"}
          buttonText={"Бүтээгдэхүүн нэмэх"}
        />
        <InputElementField
          text={"Хүргэлтийг тохируулна уу"}
          buttonText={"Хүргэлт тохируулах"}
        />
      </Stack>
    </Stack>
  );
};
