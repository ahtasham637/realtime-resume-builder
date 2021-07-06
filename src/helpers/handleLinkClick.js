const handleLinkClick = async (e, text) =>
{
    const targetType = e.target.type;

    if(!text || (typeof targetType !== 'undefined'))
    {
        e.preventDefault();
    }
}
export default handleLinkClick;
