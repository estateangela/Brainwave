import ButtonSvg from '../assets/svg/ButtonSvg';

const Button = ({classname, href, onclick , children , px , white }) => {
 const renderButton = () => (
    <button>
        <span>{children}</span>
        {ButtonSvg(white)}
    </button>
 );
 return renderButton();
}

export default Button;
