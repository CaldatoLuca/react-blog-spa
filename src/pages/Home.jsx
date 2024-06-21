import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import PostList from "../components/PostsList";

const Home = () => {
  const baseUrl = import.meta.env.VITE_SERVER_URL;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/posts`);
      setPosts(response.data.posts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="col-span-6">
      <SearchBar />
      {loading ? (
        <p className="w-full text-center">Loading posts...</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
};

export default Home;
