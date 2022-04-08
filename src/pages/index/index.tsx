import { View } from "@tarojs/components";
import { useState, useEffect } from "react";

let time = 1;
function Index() {
  const [time1] = useState(time);
  const [render, setRender] = useState(false);
  useEffect(() => {
    time++;
  }, []);
  setTimeout(() => {
    setRender(!render);
  }, 1000);
  console.log('index',time1);
  return <View>首页</View>;
}

export default Index;
