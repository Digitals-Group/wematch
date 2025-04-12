import React from "react";
import { useState } from "react";
import Title from "../Title/Title";
import rightIcon from "../../../assets/svg/right.svg";
import { useEffect } from "react";
import { apiRoot } from "../../../api/apiRoot";
import { IoAddOutline } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import SkillModal from "../../ui/Modal/skill-modal";
import { toast } from "react-toastify";

const Education = () => {
  const [showMore, setShowMore] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const token = localStorage.getItem("accessToken");
  const [education, setEducation] = useState([]);
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");
  const [fieldOfSstudy, setFieldOfSstudy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [educationType, setEducationType] = useState("");
  const [description, setDescription] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteEducationId, setDeleteEducationId] = useState(null);
  const getEducation = async () => {
    try {
      const res = await apiRoot.get("/education", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res?.data);
      setEducation(res?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEducation();
  }, []);

  const handlePostEducation = async (e) => {
    e.preventDefault();

    const data = {
      institution: institution,
      degree: degree,
      field_of_study: fieldOfSstudy,
      start_date: new Date(startDate).toISOString(),
      end_date: new Date(endDate).toISOString(),
      education_type: educationType,
      description: description,
    };

    try {
      const res = await apiRoot.post("/education", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res?.data);
      getEducation();
      toast.success("Education Successfully added");
      setOpenEducation(false);
      setInstitution("");
      setDegree("");
      setFieldOfSstudy("");
      setStartDate("");
      setEndDate("");
      setEducationType("");
      setDescription("");
    } catch (err) {
      console.log(err);
      toast.error("Failed add education");
    }
  };

  const handleDeleteEducation = async () => {
    try {
      const res = await apiRoot.delete(`/education/${deleteEducationId}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res?.data);
      toast.success("Successfully deleted");
      setDeleteModal(false);
      getEducation();
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete");
    }
  };

  const deleteEducation = (id) => {
    setDeleteEducationId(id);
    setDeleteModal(true);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <section className="bg-white shadow-sm shadow-gray-300 p-6 mb-4">
        <div className="mb-6 flex items-center justify-between">
          <Title title={"Education"} />
          <button onClick={() => setOpenEducation(true)}>
            <IoAddOutline className="w-6 h-6" />
          </button>
        </div>
        <div>
          {education?.map(
            ({
              description,
              id,
              field_of_study,
              institution,
              start_date,
              end_date,
            }) => (
              <div className="mb-6 flex items-center justify-between" key={id}>
                <div>
                  <h3 className="font-inter font-normal text-black leading-[32px] text-[24px] mb-2">
                    {field_of_study}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#1D1C1C] font-inter font-normal text-4 leading-6">
                      {institution}
                    </span>
                    <p className="text-[#313D44] font-inter font-normal text-[12px] leading-4">
                      {`${formatDate(start_date)} - ${formatDate(end_date)}`}
                    </p>
                  </div>
                  <p className="text-black font-inter font-normal text-[12px] leading-[100%]">
                    {description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button>
                    <MdEdit className="w-4 h-4" />
                  </button>
                  <button>
                    <MdDelete
                      className="w-4 h-4"
                      onClick={() => deleteEducation(id)}
                    />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex items-center justify-between cursor-pointer">
          <p className="text-[#313D44] font-inter font-normal text-[16px] leading-[24px]">
            {showMore ? "Show less" : "Show more"}
          </p>
          <img src={rightIcon} alt="rightIcon" width={28} height={16} />
        </div>
      </section>
      {openEducation && (
        <SkillModal close={() => setOpenEducation(false)}>
          <div className="bg-white rounded-[8px] p-4">
            <h1 className="mb-3 font-semibold text-[25px]">Add education</h1>
            <form
              className="flex flex-col gap-2"
              onSubmit={handlePostEducation}
            >
              <div className="flex flex-col">
                <label className="mb-2">Enter institution</label>
                <input
                  type="text"
                  placeholder="Enter institution"
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  onChange={(e) => setInstitution(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Degree</label>
                <input
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  type="text"
                  placeholder="Degree"
                  onChange={(e) => setDegree(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Field of study</label>
                <input
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  type="text"
                  placeholder="Field of study"
                  onChange={(e) => setFieldOfSstudy(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Start date</label>
                <input
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  type="date"
                  placeholder="Start date"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">End date</label>
                <input
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  type="date"
                  placeholder="End date"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Education type</label>
                <input
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  type="text"
                  placeholder="education type"
                  onChange={(e) => setEducationType(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Description</label>
                <input
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  type="text"
                  placeholder="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button className="bg-black p-2 rounded-[8px] text-white">
                submit
              </button>
            </form>
          </div>
        </SkillModal>
      )}
      {deleteModal && (
        <SkillModal close={() => setDeleteModal(false)}>
          <div className="bg-white rounded-[8px] p-4">
            <h1 className="mb-3 font-semibold text-[25px]">Delete education</h1>
            <div className="flex items-center justify-between">
              <button onClick={handleDeleteEducation}>Delete</button>
              <button onClick={() => setDeleteModal(false)}>Cencel</button>
            </div>
          </div>
        </SkillModal>
      )}
    </>
  );
};

export default Education;
