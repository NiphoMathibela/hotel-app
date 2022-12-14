import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Slideshow = (children) => {
    const [context, setContext] = useState({
        items: [],
        edge: false
      });
      const timer = useRef(null);
    
      useEffect(() => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          // Move deactivated slide out when edge is false
          // Move activated slide in when edge is true
          if (context.items.length > 1 && context.edge) {
            const head = context.items.shift();
            context.items.push(head);
          }
          context.edge = !context.edge;
          setContext({ ...context });
        }, 2500);
    
        return () => clearTimeout(timer.current);
      });
    
      console.log(context.items);
  return (
    <div
      className="banner"
      style={{
        height: "600px",
        width: "600px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default Slideshow;
