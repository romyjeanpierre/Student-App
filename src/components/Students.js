import Score from "./Score";

export default function Students(props) {
  const { name, bio, scores } = props;
  return (
    <div>
      <h2 className="student">Student
      </h2>
      <h3> Name: {name} </h3>
      <h4> Bio: {bio} </h4>
      <h2 className="student">Score:</h2>
      {scores.map((score, index) => (<Score key={index} 
        date= {score.date} 
        score= {score.score} 
        />
      ))
      }
    </div>
  );
}