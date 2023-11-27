import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Escribime</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <button type="button" onClick={() => navigate("/")}>
          Volver atras
        </button>
      </form>
    </>
  );
};

export default Contact;
