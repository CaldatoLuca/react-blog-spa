import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack as BackArrow } from "react-icons/io";
import { IoMdArrowRoundForward as ForwardArrow } from "react-icons/io";
import { FaFireAlt as Fire } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidHome as Home } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";

const LeftNav = () => {
  const [tags, setTags] = useState([]);
  const baseUrl = import.meta.env.VITE_SERVER_URL;
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const backNavigate = () => {
    navigate(-1);
  };
  const forwardNavigate = () => {
    navigate(+1);
  };

  const fetchTags = async () => {
    try {
      const response = await axios.get(`${baseUrl}/tags`);
      setTags(response.data.tags);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching post:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className="col-span-1 rounded-md">
      <div className="fixed ">
        <div className=" px-4 py-6 flex flex-col gap-4">
          <div className="text-center">
            <button
              onClick={backNavigate}
              className="bg-orange-500 text-slate-200 p-1 rounded-md ms-2"
            >
              <BackArrow></BackArrow>
            </button>

            <button
              onClick={forwardNavigate}
              className="bg-orange-500 text-slate-200 p-1 rounded-md  ms-2"
            >
              <ForwardArrow></ForwardArrow>
            </button>
          </div>

          <ul>
            <li
              className={`bg-slate-500 hover:bg-opacity-50 hover:text-emerald-500 transition rounded-md cursor-pointer `}
            >
              <Link
                to={"/"}
                className="flex gap-1 items-center align-middle justify-center"
              >
                <Home /> Home
              </Link>
            </li>
          </ul>

          {loading ? (
            <div>Loading Tags...</div>
          ) : (
            <>
              {tags.length === 0 ? (
                <div>No Tags Found</div>
              ) : (
                <ul>
                  <li className="text-orange-500 font-bold flex items-center gap-2">
                    Trending Tags <Fire></Fire>
                  </li>

                  {tags.map((t, i) => (
                    <li
                      key={`tag-${i}`}
                      className="hover:bg-orange-500 rounded-md hover:bg-opacity-70 cursor-pointer transition"
                    >
                      #{t.name}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
