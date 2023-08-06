export default function Score(props) {

    const { score, date } = props;
  
    return (

      <div 
        className="score">
        <h4>Date: {date} 
        </h4>

        <h4>Score: {score} 
        </h4>

      </div>
    );
  }