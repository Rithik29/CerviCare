import { faPlane, faRegistered, faSave, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import doctor from '../../assets/doctor.png'

const Query = () => {
  const [xlsxFiles, setXLSXFiles] = useState([])
  const [audioFiles, setAudioFiles] = useState([])
  const [imageFiles, setImageFiles] = useState([])

  const handleFileChange = (event, setFiles) => {
    const selectedFiles = event.target.files
    if (selectedFiles) {
      setFiles([...setFiles, ...selectedFiles])
      event.target.value = null // Reset the input field
    }
  }

  const removeFile = (file, setFiles) => {
    const newFiles = [...setFiles]
    const index = newFiles.indexOf(file)
    if (index > -1) {
      newFiles.splice(index, 1)
      setFiles(newFiles)
    }
  }

  const handleSubmit = () => {
    // Here, you can handle the file upload logic for each file type.
    console.log('XLSX Files:', xlsxFiles)
    console.log('Audio Files:', audioFiles)
    console.log('Image Files:', imageFiles)
  }

  const FileInput = ({ accept, onChange, files, setFiles, label }) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
      accept,
      onDrop: (acceptedFiles) => {
        setFiles([...files, ...acceptedFiles])
      },
    })
  }

  return (
    <div className="p-4 flex items-center w-full">
      <div className="space-y-4 w-[60%]">
        <h1 className="text-4xl text-start">Query Section</h1>

        <div className="space-y-4">
          <label className="text-xl" htmlFor="question">
            Question:
          </label>
          <input
            type="text"
            id="Question"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter your query here"
            // Add a state or value prop and onChange handler for patient name
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={handleSubmit}
            className="bg-[#1B263B] text-white px-6 py-2 text-xl text-center rounded  transition duration-300 transform hover:scale-105"
          >
            Result
          </button>
        </div>

        <div className="space-y-4">
          <label className="text-xl" htmlFor="answer">
            Answer
          </label>
          <input
            type="text"
            id="answer"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Answer to your query"
            // Add a state or value prop and onChange handler for patient ID
          />
        </div>

        <FileInput
          accept=".jpg, .jpeg, .png"
          onChange={(e) => handleFileChange(e, imageFiles)}
          files={imageFiles}
          setFiles={setImageFiles}
          label="Upload Results"
        />
        
      </div>
      <div>
        <img src={doctor} alt="" className="h-[400px]" />
      </div>
    </div>
  )
}

export default Query
