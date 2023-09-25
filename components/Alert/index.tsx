

const Alert = ({ message, onClose, success }) => {
  return (
    <div className="alert" style={{borderColor: success ? '#00cb00' : 'tomato'}}>
      <p className="text-base text-body-color dark:border-white">{message}</p>
        <button onClick={onClose}>
            <div className="close"></div>
        </button>
    </div>
  );
};

export default Alert;
