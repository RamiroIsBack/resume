import React from "react";
import ServiceModal from "../presentational/ServiceModal";
import WorkModal from "../presentational/WorkModal";
import { useCopy } from "../../utils/useCopy";
import { useUI } from "../../context/UIContext";

function ModalContainer() {
  const { talksList, worksList, aiProjectsList } = useCopy();
  const { screenSize, workModal, serviceModal, lang, toggleWorkModal } = useUI();

  const modalShowing = workModal !== "" || serviceModal !== "";
  if (!modalShowing) return null;

  const mobile = screenSize === "mobile";

  if (workModal !== "") {
    const completeList = [...aiProjectsList, ...talksList, ...worksList];
    const workToShow = completeList.find(w => w.nombre === workModal);
    return (
      <div>
        <WorkModal
          show={modalShowing}
          workToShow={workToShow}
          onClose={() => toggleWorkModal("")}
          mobile={mobile}
          lang={lang}
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
        lang={lang}
      />
    </div>
  );
}

export default ModalContainer;
