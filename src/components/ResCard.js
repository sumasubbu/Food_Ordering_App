import { CDN_URL } from "../../utils/constants";

const ResCard = (props) => {
  const { resObj } = props;
  console.log(resObj);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resObj?.info;
  const { deliveryTime } = resObj?.info?.sla;
  if (!resObj) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="res-card">
      <img
        src={CDN_URL+
        cloudinaryImageId}
        alt="food-image"
      ></img>
      <h3 className="res-title">{name}</h3>
      <div className="res-description">
        <h5>{cuisines.join(', ')}</h5>
        <h5>{deliveryTime} minutes</h5>
        <h5> {avgRating} stars</h5>
        <h5>{costForTwo} </h5>
      </div>
    </div>
  );
};

export default ResCard;