import Header from "./Header"
import About from "./About";
import ArticleList from "./ArticleList";
import blogPost from "../data/blog";

function App (){
  return (
    <div className="App">
      <Header name="Overracted" />
      <About
      image="https://via.placeholder.com/150"
      about="Personal blog by Dan Abramov. I explain with words and code."
      />
      <ArticleList post={blogPost} />
      </div>
  );
}



export default App;