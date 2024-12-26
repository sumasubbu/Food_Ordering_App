import ResCard from './ResCard';
import {resList} from '../../utils/mockData'

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
