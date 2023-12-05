import Spinner from "../elements/Spinner";

const ButtonSubmit = (props) => {
  const { onClick, type, disabled, label, isLoading } = props;
  return (
    <button
      className={`rounded-lg w-full h-11 font-medium bg-primary1 text-white`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      { isLoading ? 
        <Spinner></Spinner> : 
        label ? label : 'Submit'
       }
    </button>
  );
};

export default ButtonSubmit;