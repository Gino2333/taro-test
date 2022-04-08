import { View } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro from '@tarojs/taro';

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
  console.log('test',time1);
  return (
    <>
      <View onClick={() => {Taro.reLaunch({url: '/pages/index/index'})}}>重启到首页</View>
      <View onClick={() => {Taro.reLaunch({url: '/pages/test/index'})}}>重启到测试页</View>
    </>
  );
}

export default Index;
