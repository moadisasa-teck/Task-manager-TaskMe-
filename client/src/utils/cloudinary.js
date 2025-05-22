// utils/cloudinary.js
export const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME,
  apiKey: import.meta.env.VITE_APP_CLOUDINARY_API_KEY,
  uploadPreset: import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET,
};

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", cloudinaryConfig.uploadPreset);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};
