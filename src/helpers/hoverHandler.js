const hoverHandler = (e, setProperty) =>
{
    if(e.type === "mouseenter")
      {
        setProperty(() => true);
      }
      else if (e.type === "mouseleave")
      {
        setProperty(() => false);
      }
}

export default hoverHandler;