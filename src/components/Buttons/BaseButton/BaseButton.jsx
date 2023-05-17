import './BaseButton.scss';

function BaseButton(props) {
    const { className, buttonIcon, buttonText } = props;

    // return (
    //     <div className={'base-button' + (className !== undefined ? ` ${className}` : '')}>
    //         <img className={`base-button__icon`} src={buttonIcon} alt="" />
    //         <button type={'button'} className='base-button__button' >
    //             {buttonText.toUpperCase()}
    //         </button>
    //     </div>
    // );

    const divClassName = className !== undefined ? `${className}` : 'base-button';
    const iconClassName = `${divClassName}__icon`;
    const btnClassName = `${divClassName}__button`;

    return (
        <div className={divClassName}>
            <img className={iconClassName} src={buttonIcon} alt="" />
            <button type={'button'} className={btnClassName} >
                {buttonText.toUpperCase()}
            </button>
        </div>
    );
}

export default BaseButton;



