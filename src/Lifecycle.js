import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");

    return () => {
      //Unmount 시점에 실행
      console.log("Unmount");
    };
  }, []);
  return <div>Unmount Testing Component</div>;
};
const LifeCycle = () => {
  //   const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");

  //   useEffect(() => {
  //     //마운트 될때 나타남
  //     console.log("Mount!");
  //   }, []);

  //   useEffect(() => {
  //     //업데이트 될때 나타남
  //     console.log("Update!");
  //   });

  //   useEffect(() => {
  //     console.log(`count is update : ${count}`);
  //     if (count > 5) {
  //       alert("count가 5를 넘어서 1로 초기화합니다.");
  //       setCount(1);
  //     }
  //   }, [count]);

  //   useEffect(() => {
  //     console.log(`text is update : ${text}`);
  //   }, [text]);
  //   return (
  //     <div style={{ padding: 20 }}>
  //       <div>
  //         {count}
  //         <button onClick={() => setCount(count + 1)}>+</button>
  //       </div>
  //       <div>
  //         <input value={text} onChange={(e) => setText(e.target.value)} />
  //       </div>
  //     </div>
  //   );
  // };

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};
export default LifeCycle;
