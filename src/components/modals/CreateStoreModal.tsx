import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ButtonBase, Stack } from "@mui/material";
import { CloseIconModal } from "../icons";
import { AddFoodInfo } from "../settings/Inputs";
import { ConstructionOutlined } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 587,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "16px",
  p: 3,
};

interface DataType {
  _id: string;
  name: string;
}

export const CreateStoreModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  const BE_URL = "https://food-delivery-be-zeta.vercel.app/api/category";
  const [categoryName, setCategoryName] = React.useState("");

  return (
    <Stack>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display={"flex"} flexDirection={"column"}>
          <Stack
            padding={"16px 24px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={"1px solid #E0E0E0"}
            bgcolor={"#FFF"}
            direction={"row"}
          >
            <Typography
              fontSize={"20px"}
              fontWeight={700}
              color={"#121316"}
              lineHeight={"28px"}
              letterSpacing={"-0.2px"}
            >
              Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?
            </Typography>
            {/* <ButtonBase onClick={onClose}>
              <CloseIconModal />
            </ButtonBase> */}
            <Stack width={"24px"} height={"24px"}></Stack>
          </Stack>
          <Stack gap={"16px"} paddingY={"24px"}>
            <AddFoodInfo
              text={"Жич: Та үүнийг хүссэн үедээ өөрчилж болно."}
              placehold={"Дэргүүрийн төрлөө оруулна уу."}
              value={categoryName}
              setFunction={setCategoryName}
            />
          </Stack>
          <Stack
            paddingTop={"24px"}
            gap={"16px"}
            alignItems={"center"}
            borderTop={"1px solid #E0E0E0"}
            justifyContent={"flex-end"}
            direction={"row"}
          >
            <ButtonBase>
              <Stack
                minWidth={"80px"}
                padding={"8px 12px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"8px"}
                border={"1px solid #D6D8DB"}
                bgcolor={"#FFF"}
              >
                <Typography
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#121316"}
                  lineHeight={"16px"}
                  letterSpacing={"-0.2px"}
                >
                  Цуцлах
                </Typography>
              </Stack>
            </ButtonBase>
            <ButtonBase
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                onClose(e);
              }}
            >
              <Stack
                minWidth={"80px"}
                padding={"8px 12px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"8px"}
                bgcolor={"#121316"}
              >
                <Typography
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#FFF"}
                  lineHeight={"16px"}
                  letterSpacing={"-0.2px"}
                >
                  Хадгалах
                </Typography>
              </Stack>
            </ButtonBase>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};
