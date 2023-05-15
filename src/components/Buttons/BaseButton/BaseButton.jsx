import './BaseButton.scss';
import '../../../styles/_variables.scss';

function BaseButton(props) {
    const { className, buttonIcon, buttonText } = props;

    return (
        <div className={'base-button' + (className !== undefined ? ` ${className}` : '')}>
            <img className='base-button__icon' src={buttonIcon} alt="" />
            <button className='base-button__button' type='button'>
                {buttonText.toUpperCase()}
            </button >
        </div>
    );
}

export default BaseButton;




