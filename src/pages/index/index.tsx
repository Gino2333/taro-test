import { View } from "@tarojs/components";
import { useState, useEffect } from "react";

let time = 1;
function Index() {
  const [time1] = useState(time);
  useEffect(() => {
    time++;
  }, []);
  setInterval(() => {
    console.log('index',time1);
  }, 1000);
  return <View>首页</View>;
}

export default Index;
