import { useEffect } from "react";
import { useState } from "react";
import { apiRoot } from "../../../api/apiRoot";
import rightIcon from "../../../assets/svg/right.svg";
import SkillModal from "../../ui/Modal/skill-modal";
import Title from "../Title/Title";
import { IoAddOutline } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Skills = () => {
  const [showMore, setShowMore] = useState(false);
  const [getSkills, setGetSkills] = useState([]);
  const [skillName, setSkillName] = useState("");
  const [level, setLevel] = useState("");
  const token = localStorage.getItem("accessToken");
  const [post, setPost] = useState(false);

  const fetchSkills = async () => {
    try {
      const res = await apiRoot.get("/skills", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res?.data);
      setGetSkills(res?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await apiRoot.delete(`/skills/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res?.data);
      fetchSkills();
      toast.success("Successfully deleted");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete");
    }
  };

  const handleSkillsPost = async (e) => {
    e.preventDefault();

    const data = {
      skill_name: skillName,
      level: level,
    };

    try {
      const res = await apiRoot.post("/skills", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res?.data);
      setSkillName("");
      setLevel("");
      fetchSkills();
      setPost(false);
      toast.success("Successfully posted");
    } catch (err) {
      console.log(err);
      toast.error("Failed to post");
    }
  };

  return (
    <>
      <section className="bg-white shadow-sm shadow-gray-300 p-6 mb-4">
        <div className="mb-6 flex items-center justify-between">
          <Title title={"Skills"} />
          <button
            className="flex items-center gap-2"
            onClick={() => setPost(true)}
          >
            <IoAddOutline className="w-6 h-6" />
          </button>
        </div>
        <div className="mb-[24px]">
          {getSkills?.map(({ level, skill_name, id }) => (
            <div
              className="mb-6 last:mb-0 flex items-center justify-between"
              key={id}
            >
              <div>
                <h3 className="text-[#1D1C1C] font-inter font-medium text-[24px] leading-[32px] mb-2">
                  {skill_name}
                </h3>
                <p className="text-[#313D44] font-inter font-normal text-[16px] leading-6">
                  {level}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button>
                  <MdEdit className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(id)}>
                  <MdDelete className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowMore(!showMore)}
        >
          <p className="text-[#313D44] font-inter font-normal text-[16px] leading-[24px]">
            {showMore ? "Show less" : "Show more"}
          </p>
          <img src={rightIcon} alt="rightIcon" width={28} height={16} />
        </div>
      </section>
      {post && (
        <SkillModal close={() => setPost(false)}>
          <div className="bg-white rounded-[8px] p-4">
            <h1 className="mb-3 font-semibold text-[25px]">Add skills</h1>
            <form className="flex flex-col gap-2" onSubmit={handleSkillsPost}>
              <div className="flex flex-col">
                <label className="mb-2">Enter skill</label>
                <input
                  type="text"
                  onChange={(e) => setSkillName(e.target.value)}
                  placeholder="Enter skill"
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Level</label>
                <input
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  type="text"
                  onChange={(e) => setLevel(e.target.value)}
                  placeholder="Level"
                />
              </div>
              <button className="bg-black p-2 rounded-[8px] text-white">
                submit
              </button>
            </form>
          </div>
        </SkillModal>
      )}
    </>
  );
};

export default Skills;
// {educationData
// ?.slice(0, showMore ? educagtionData.length : 3)
// .map((edu, id) => (
//   <div className="mb-6" key={id}>
//     <h3 className="text-[#1D1C1C] font-inter font-medium text-[24px] leading-[32px] mb-2">
//       {edu?.title}
//     </h3>
//     <p className="text-[#313D44] font-inter font-normal text-[16px] leading-6">
//       {edu?.text}
//     </p>
//   </div>
// ))}
