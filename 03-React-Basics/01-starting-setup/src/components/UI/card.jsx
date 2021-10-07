import "./card.css";

const Card = (props) => {
  // in order for the card component to be affected by other css classes given to the elements that call it (expenses), we need to make it take the props.className, aka the classnames of its parent element
  const classes = 'card ' + props.className;
  // we can then add that as the className for what the card component returns, so it is affected by the card.css as well as the expenses.css
  return (
    <div className={classes}>{props.children}</div>
    // props.children is a universal attribute available to all components, that essentially returns the HTML that is contained within the parent element that calls the card component
  )
}

export default Card;
