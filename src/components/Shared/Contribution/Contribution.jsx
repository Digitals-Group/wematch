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

const Contribution = () => {
  const [showMore, setShowMore] = useState(false);
  const [openPostContribution, setOpenPostContribution] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [posistion, setPosistion] = useState("");
  const [contributionDescription, setContributionDescription] = useState("");
  const [contributionStartdate, setContributionStartdate] = useState("");
  const [contributionEndDate, setContributionEndDate] = useState("");
  const [isCurrent, setIsCurrent] = useState(false);
  const [deleteContributionModal, setDeleteContributionModal] = useState(false);
  const [deleteContributionId, setDeleteContributionId] = useState(null);
  const [contribution, setContribution] = useState([]);
  const token = localStorage.getItem("accessToken");

  const getContribution = async () => {
    try {
      const res = await apiRoot.get("/contribution-history", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res?.data?.data);
      setContribution(res?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getContribution();
  }, []);

  const postContribution = async (e) => {
    e.preventDefault();

    const data = {
      company_name: companyName,
      position: posistion,
      description: contributionDescription,
      start_date: contributionStartdate,
      end_date: contributionEndDate,
      is_current: isCurrent,
    };

    try {
      const res = await apiRoot.post("contribution-history", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res?.data?.data);
      getContribution();
      setOpenPostContribution(false);
      setCompanyName("");
      setPosistion("");
      setContributionDescription("");
      setContributionStartdate("");
      setContributionEndDate("");
      setIsCurrent(false);
      toast.success("Successfully added");
    } catch (err) {
      console.log(err);
      toast.error("Failed to post");
    }
  };

  const handleDeleteContribution = async () => {
    console.log(deleteContributionId);
    try {
      const res = await apiRoot.delete(
        `/contribution-history/${deleteContributionId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res?.data?.data);
      setDeleteContributionModal(false);
      toast.success("Successfully deleted");
      getContribution(); // refresh list
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete");
    }
  };

  const deleteIndexContribution = (id) => {
    setDeleteContributionModal(true);
    setDeleteContributionId(id);
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
      <section className="bg-white shadow-sm shadow-gray-300 p-6">
        <div className="mb-6 flex items-center justify-between">
          <Title title={"Contribution"} />
          <button onClick={() => setOpenPostContribution(true)}>
            <IoAddOutline className="w-6 h-6" />
          </button>
        </div>
        <div>
          {contribution?.map(
            ({
              id,
              company_name,
              description,
              end_date,
              start_date,
              position,
            }) => (
              <div className="mb-6 flex items-center justify-between" key={id}>
                <div>
                  <h3 className="font-inter font-normal text-black leading-[32px] text-[24px] mb-2">
                    {position}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#1D1C1C] font-inter font-normal text-4 leading-6">
                      {company_name}
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
                      onClick={() => deleteIndexContribution(id)}
                    />
                  </button>
                </div>
              </div>
            )
          )}
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
      {openPostContribution && (
        <SkillModal close={() => setOpenPostContribution(false)}>
          <div className="bg-white rounded-[8px] p-4">
            <h1 className="mb-3 font-semibold text-[25px]">Add contribution</h1>
            <form className="flex flex-col gap-2" onSubmit={postContribution}>
              <div className="flex flex-col">
                <label className="mb-2">Company name</label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Position</label>
                <input
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  type="text"
                  placeholder="Position"
                  onChange={(e) => setPosistion(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Description</label>
                <input
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setContributionDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Start date</label>
                <input
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  type="date"
                  placeholder="Start date"
                  onChange={(e) => setContributionStartdate(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">End date</label>
                <input
                  className="p-2 border rounded-[8px] border-[#130B544D] outline-none"
                  type="date"
                  placeholder="End date"
                  onChange={(e) => setContributionEndDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    checked={isCurrent}
                    onChange={(e) => setIsCurrent(e.target.checked)}
                  />
                  <span>Currently working here</span>
                </label>
              </div>
              <button className="bg-black p-2 rounded-[8px] text-white">
                submit
              </button>
            </form>
          </div>
        </SkillModal>
      )}

      {deleteContributionModal && (
        <SkillModal close={() => setDeleteContributionModal(false)}>
          <div className="bg-white rounded-[8px] p-4">
            <h1 className="mb-3 font-semibold text-[25px]">
              Delete contribution
            </h1>
            <div className="flex items-center justify-between">
              <button onClick={handleDeleteContribution}>Delete</button>
              <button onClick={() => setDeleteContributionModal(false)}>
                Cencel
              </button>
            </div>
          </div>
        </SkillModal>
      )}
    </>
  );
};

export default Contribution;
