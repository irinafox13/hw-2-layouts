const IconSwitch = (props) => {
    const { icon, onSwitch } = props;
    return (
        <div className="row justify-content-end mx-3 mt-2">
            <span className="material-icons md-36 md-dark" onClick={() => onSwitch()}>{icon}</span>
        </div>
    )
}
  
export default IconSwitch