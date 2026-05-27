import React from "react";
import { ServiceModal, WorkModal } from "../presentational";
import { useCopy } from "../../utils/useCopy";
import { useUI } from "../../context/UIContext";

function ModalContainer() {
  const { talksList, worksList } = useCopy();
  const { screenSize, workModal, serviceModal, toggleWorkModal } = useUI();

  const modalShowing = workModal !== "" || serviceModal !== "";
  if (!modalShowing) return null;

  const mobile = screenSize === "mobile";

  if (workModal !== "") {
    const completeList = [...talksList, ...worksList];
    const workToShow = completeList.find(w => w.nombre === workModal);
    return (
      <div>
        <WorkModal
          show={modalShowing}
          workToShow={workToShow}
          onClose={() => toggleWorkModal("")}
          mobile={mobile}
        />
      </div>
    );
  }

  return (
    <div>
      <ServiceModal
        show={modalShowing}
        workToShow={serviceModal}
        onClose={() => toggleWorkModal("")}
        mobile={mobile}
      />
    </div>
  );
}

export default ModalContainer;
