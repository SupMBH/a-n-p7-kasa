
import redstar from "../assets/images/redStar.svg";
import greystar from "../assets/images/greyStar.svg";
import "../assets/styles/Rate.css";

function Rate({ rating }) {
const stars = [1, 2, 3, 4, 5];

return (
<div className="rating">
{stars.map((star) =>
rating >= star ? (
<img
         key={star}
         className="rating__icon"
         src={redstar}
         alt=""
       />
) : (
<img
         key={star}
         className="rating__icon"
         src={greystar}
         alt=""
       />
)
)}
</div>
);
}

export default Rate;