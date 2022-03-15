import Tasks from "../Tasks/Tasks";
import Timer from "../Timer/Timer";
import styles from './Body.module.css'

const Body = () => {
  return (
    <div className = {styles.body}>
      <Timer></Timer>
      <Tasks></Tasks>
    </div>
  );
};

export default Body;
