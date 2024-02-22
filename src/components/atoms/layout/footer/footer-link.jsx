const FooterLink = ({icon, text, link}) => {
    return (
        <div className="link">
            {
                icon && (
                    <img src={icon} alt="Icon" />
                )
            }
            <p>{text}</p>
        </div>
    )
}

export default FooterLink;