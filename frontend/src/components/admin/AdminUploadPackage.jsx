import React, { useState } from 'react';
import axios from 'axios';

const AdminUploadPackage = () => {
  const [formData, setFormData] = useState({
    package_name: '',
    package_description: '',
    image: null,
  });

  const handleQuillChange = (value) => {
    setFormData((prev) => ({ ...prev, package_description: value }));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('package_name', formData.package_name);
    data.append('package_description', formData.package_description);
    data.append('image', formData.image);

    try {
      const response = await axios.post('/upload-package', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          isAdmin: 'true', // Admin verification
        },
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload New Package</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <label>
          Package Name:
          <input
            type="text"
            name="package_name"
            value={formData.package_name}
            onChange={handleChange}
            required
          />
        </label>
        <label>Package Description:</label>
        <ReactQuill
          value={formData.package_description}
          onChange={handleQuillChange}
          required
        />
        <label>
          Upload Image:
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminUploadPackage;
