import './BaseButton.scss';

function BaseButton(props) {
    const { className, buttonIcon, buttonText } = props;

    const divClassName = (className !== undefined & className !== null) ? className : '';
    const iconClassName = divClassName !== '' ? `base-button__icon ${divClassName}__icon` : 'base-button__icon';
    const btnClassName = divClassName !== '' ? `base-button__button ${divClassName}__button` : 'base-button__button';

    return (
        <div className={divClassName !== '' ? `base-button ${divClassName}` : 'base-button'}>
            <img className={iconClassName} src={buttonIcon} alt="base button icon" />
            <button type={'button'} className={btnClassName} >
                {buttonText.toUpperCase()}
            </button>
        </div>
    );
}

export default BaseButton;