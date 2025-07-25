const cloudinary = require('cloudinary').v2;
require('dotenv').config();
exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  try {
    const options = { folder };
    if (height) options.height = height;
    if (quality) options.quality = quality;
    options.resource_type = 'auto';

    return await cloudinary.uploader.upload(file.tempFilePath, options);
  } catch (error) {
    console.log("❌ Error while uploading image to Cloudinary:");
    console.log(error);
    return null; // ✅ safe fallback
    // OR: throw error; // if you want to handle it at a higher level
  }
};




// Function to delete a resource by public ID
exports.deleteResourceFromCloudinary = async (url) => {
    if (!url) return;

    try {
        const result = await cloudinary.uploader.destroy(url);
        console.log(`Deleted resource with public ID: ${url}`);
        console.log('Delete Resourse result = ', result)
        return result;
    } catch (error) {
        console.error(`Error deleting resource with public ID ${url}:`, error);
        throw error;
    }
};