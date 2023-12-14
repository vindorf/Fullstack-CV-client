import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import axios from "axios";
import Modal from "react-modal";
import Header from "../components/resume/Header";

import "./ResumeCard.css";

Modal.setAppElement("#root");

const API_URL = import.meta.env.VITE_SERVER_URL;

function UserPage() {
  const navigate = useNavigate();
  const { user, logOutUser } = useContext(AuthContext);
  const [resumes, setResumes] = useState([]);
  const [resumeTitle, setResumeTitle] = useState("");
  const [hideForm, sethideForm] = useState("show");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalUserIsOpen, setModalUserIsOpen] = useState(false);
  const [deleteResumeId, setDeleteResumeId] = useState(null);
  const storedToken = localStorage.getItem("authToken");

  const handleResumeTitleChange = (value) => {
    setResumeTitle(value);
  };

  const createCV = async () => {
    try {
      const requestBody = {
        resumeTitle,
        userId: user._id,
      };

      await axios.post(`${API_URL}/api/resumes`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      getAllResumes();
      setResumeTitle("");
    } catch (error) {
      console.error("ERROR!", error);
    }
  };

  const getAllResumes = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/resumes/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setResumes(response.data.resumes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllResumes();
  }, [user._id]);

  const openModal = (resumeId) => {
    setModalIsOpen(true);
    setDeleteResumeId(resumeId);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setDeleteResumeId(null);
  };
  const openUserModal = () => {
    setModalUserIsOpen(true);
  };
  const closeUserModal = () => {
    setModalUserIsOpen(false);
  };

  const deleteResume = async (resumeId) => {
    try {
      if (deleteResumeId) {
        await axios.delete(`${API_URL}/api/resume/delete/${resumeId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });

        const updatedResumes = resumes.filter(
          (resume) => resume._id !== resumeId
        );
        setResumes(updatedResumes);
      }
      closeModal();
    } catch (error) {
      console.error(error);
      closeModal();
    }
  };

  const deleteUser = async () => {
    try {
      if (modalUserIsOpen) {
        await axios.delete(`${API_URL}/api/delete/user/${user._id}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
      }
      console.log("user successfuly deleted", user._id);
      closeUserModal();
    } catch (err) {
      console.log(err);
      closeUserModal();
    }
    navigate("/");
  };

  return (
    <div className="user-page-body">
      <h2>Welcome {user.email}</h2>
      <div>
        <Header
          resumeTitle={resumeTitle}
          onResumeTitleChange={handleResumeTitleChange}
        />
        <button
          type="submit"
          class="btn btn-primary create-new-resume-btn"
          onClick={createCV}
        >
          Create new resumé
        </button>
      </div>

      {resumes &&
        resumes.map((resume) => {
          return (
            <div key={resume._id} className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">{resume.resumeTitle}</h3>

                <Link
                  to={`/resume/${resume._id}`}
                  className="btn btn-primary ml-2"
                >
                  Edit
                </Link>
                <Link
                  to={`/resume/show/${resume._id}`}
                  className="btn btn-success"
                >
                  Preview "look 1"
                </Link>
                <Link
                  to={`/resume/show-look2/${resume._id}`}
                  className="btn btn-success"
                >
                  Preview "look 2"
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => openModal(resume._id)}
                >
                  Delete Resume
                </button>
              </div>
            </div>
          );
        })}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="custom-modal"
        contentLabel="Delete Confirmation"
      >
        <div className="custom-modal-content">
          <h3>Are you sure delete Resume?</h3>
          <div className="custom-modal-buttons">
            <button onClick={closeModal} className="modal-btn">
              Cancel
            </button>
            <button
              onClick={() => deleteResume(deleteResumeId)}
              className="modal-btn"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </Modal>

      {/* -------------------- DELETE USER SECTION -------------------- */}

      <button
        className="btn btn-secondary delete-btn"
        onClick={() => openUserModal()}
      >
        Delete Account
      </button>
      <Modal
        isOpen={modalUserIsOpen}
        onRequestClose={closeUserModal}
        className="custom-modal"
        contentLabel="Delete Confirmation"
      >
        <div className="custom-modal-content">
          <h3>Are you sure delete User?</h3>
          <div className="custom-modal-buttons">
            <button onClick={closeUserModal} className="modal-btn">
              Cancel
            </button>
            <button
              onClick={() => {
                deleteUser();
                logOutUser();
              }}
              className="modal-btn"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default UserPage;
