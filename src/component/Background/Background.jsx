import { useEffect, useRef, useState } from "react";

const Background = () => {
  const [boxes, setBoxes] = useState([])
  const [xM,setxM]  = useState(0)
  const [yM,setyM] = useState(0)
  useEffect(() => {
    BuildBoxes()

    const handleMouseMoce = (event) => {
      setxM(event.clientX)
      setyM(event.clientY)
    };

    window.addEventListener('mousemove', handleMouseMoce);
    return () => {
      window.removeEventListener('mousemove', handleMouseMoce);
    };
  }, [])



  const BuildBoxes = () => {
    var boxlist = []
    const totalboxes = 25
    for (let index = 0; index < totalboxes; index++) {
      boxlist.push(index)

    }
    setBoxes(boxlist)


  }


  return (<>
    <div className="fixed  w-[100vw] h-[100vh]" onClick={BuildBoxes}>
      {boxes.map((box, idx) => (
        <Boxes key={idx} index={idx} xM={xM}  yM={yM}/>
      ))}

    </div>
  </>)
}


export default Background;



const Boxes = ({ index,xM,yM }) => {
  const [size, setsize] = useState(0)
  const [x, setx] = useState(window.innerWidth / 2)
  const [y, sety] = useState(window.innerHeight / 2)
  const [brightness, setbrightness] = useState(2)
  const xRef = useRef()
  const yRef = useRef()
 
  useEffect(() => {
    BuildBoxes()
    const handleResize = () => {
      BuildBoxes();
    };
   
    // Attach the event listener when the component mounts
    window.addEventListener('resize', handleResize);
  
    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      
    };
    
  }, [])

  useEffect(()=>{
    MouseMove()
  },[xM,yM])
  function MouseMove(){
   
    if (xM >= x && xM <= x + size && yM >= y&& yM <= y + size) {
      BuildBoxes()
    }
  
  }
  function BuildBoxes() {
    if(window.innerWidth>768){
      setsize(getRandomDigitInRange(50, 200))
    }else{
      setsize(getRandomDigitInRange(50, 100))
    }
    setbrightness( getRandomDigitInRange(1,1.4))
    sety(getRandomDigitInRange(0, (window.innerHeight - 200)))
    if (getRandomDigitInRange(0,1)==1) {
      setx(getRandomDigitInRange(0, ((window.innerWidth / 2) - ((window.innerWidth / 2) / 2))))
    } else {
      setx(getRandomDigitInRange((window.innerWidth / 2), (window.innerWidth) - 50))
    }
   
  }
  function getRandomDigitInRange(min, max) {
    // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
    const randomDecimal = Math.random();

    // Scale the random decimal to fit within the specified range
    const scaledRandom = randomDecimal * (max - min + 1);

    // Floor the result to get an integer within the range
    const randomInteger =parseInt( Math.floor(scaledRandom) + min);

    return randomInteger;
  }
  return (
    <div onClick={BuildBoxes} className=" fixed -z-30   bg-gradient-to-b from-sky-300 to-sky-500 rounded-xl shadow-lg transition-all duration-[1500ms] " style={{ width: size, height: size, top: y, left: x, filter: "brightness(" + brightness + ")" }}>
    
  
    </div>
  )
}