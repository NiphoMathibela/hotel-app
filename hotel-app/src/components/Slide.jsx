export function SlideshowItem({ children }) {
    const name = useRef(`${performance.now()}_${Math.random()}`);
  // Generate a name for this slide.
    const [context] = useContext(SlideshowContext);
    const [stage, setStage] = useState("ready");
  
    useEffect(() => {
      // register self with the name.
      context.items.push(name.current);
      return () => {
        // Remove the name when slide is removed.
        const index = context.items.indexOf(name.current);
        context.items.splice(index, 1);
      };
    }, []);
  
    useEffect(() => {
      const activeName = context.items[0];
      if (activeName === name.current) {
        setStage("on");
      }
      if (activeName !== name.current && stage === "on") {
        setStage("off");
      }
      if (activeName !== name.current && stage === "off") {
        setStage("ready");
      }
    }, [context]);
  
    let left = 0;
    let zIndex = 0;
    switch (stage) {
      case "ready":
        left = "100%";
        break;
      case "on":
        left = "0";
        zIndex = 1;
        break;
      case "off":
        zIndex = 0;
        break;
      default:
    }
  
    return (
      <div
        style={{
          transition: "0.5s",
          position: "absolute",
          top: 0,
          left: left,
          zIndex: zIndex
        }}
      >
        {children}
      </div>
    );
  }