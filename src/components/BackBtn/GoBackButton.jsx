import { useNavigate } from "react-router-dom";

import "./GoBackButton.scss";
export default function GoBackButton() {
  const navigate = useNavigate();



  return (
    <button onClick={() => navigate(-1)} className="back__btn">
      Go Back
    </button>
  );
}
