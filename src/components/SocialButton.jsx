function SocialButton(props) {
    return (
        <a className={props.name + 'Link'} href={props.address}>
            <img className={props.name + 'Logo'} src={props.icon} alt={props.name} width={props.width} />
        </a>
    )
}

export default SocialButton;