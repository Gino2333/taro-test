// 全局样式
import { useEffect } from "react";
import "./app.less";

function App(props) {
  useEffect(() => {
    console.log("app launch");
    return () => {
      console.log("app unload");
    };
  }, []);
  return (
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    <>
      {/* props.children 是将要被渲染的页面 */}
      {props.children}
    </>
  );
}

export default App;
