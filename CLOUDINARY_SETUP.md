# 📸 Cloudinary Gallery Setup Guide

Your gallery is now set up to automatically pull images from Cloudinary!

## 🚀 Quick Setup (5 minutes)

### Step 1: Create a Cloudinary Account
1. Go to [cloudinary.com](https://cloudinary.com) and sign up (it's free!)
2. Confirm your email

### Step 2: Get Your Cloud Name
1. After signing in, you'll see your **Dashboard**
2. Find your **Cloud name** (it's displayed prominently at the top)
3. Copy this value

### Step 3: Configure Your App
1. Open the `.env` file in your project root
2. Replace `your-cloud-name` with your actual cloud name:
   ```
   VITE_CLOUDINARY_CLOUD_NAME=your-actual-cloud-name
   VITE_CLOUDINARY_FOLDER=portfolio-gallery
   ```

### Step 4: Enable List Resources API
**This is crucial for automatic image fetching!**

1. In Cloudinary Dashboard, click **Settings** (gear icon, top right)
2. Go to **Security** tab
3. Scroll down to **Restricted media types**
4. Find **Resource list** section
5. Enable: `☑ Enable list resources`
6. Click **Save**

### Step 5: Upload Your Photos
1. In Cloudinary Dashboard, click **Media Library**
2. Create a folder called `portfolio-gallery` (or your chosen folder name)
3. Click the folder to open it
4. Click **Upload** and select your photos
5. Done! Your photos will automatically appear on your site 🎉

## 📁 Optional: Add Metadata to Images

To customize titles and categories for your photos:

1. In Media Library, click on an image
2. Click **Edit** (pencil icon)
3. Scroll to **Context** section
4. Click **Add Context** and add custom metadata:
   ```json
   {
     "title": "Sunset Over Mountains",
     "category": "Landscape",
     "alt": "Beautiful sunset with mountain silhouette"
   }
   ```
5. Click **Save**

If you don't add metadata:
- **Title**: Auto-generated from filename
- **Category**: Defaults to "Uncategorized"
- **Alt**: Generic alt text

## 🎨 Supported Categories

Add any category you want! Examples:
- Landscape
- Portrait
- Architecture
- Nature
- Wildlife
- Street
- Abstract
- Macro
- Interior
- Aerial
- Wedding
- Event
- Product

## 🔄 Updating Your Gallery

Just upload new photos to your Cloudinary folder - they'll automatically appear on your site! No code changes needed.

## 🛠️ Troubleshooting

**Images not showing up?**
1. Make sure you enabled "Resource list" in Security settings
2. Check your cloud name is correct in `.env`
3. Verify your folder name matches in `.env`
4. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

**Still showing placeholder images?**
- The fallback images will show if Cloudinary isn't configured or if there's an error
- Check browser console (F12) for any error messages

## 💰 Free Tier Limits

Cloudinary's free tier includes:
- 25 GB storage
- 25 GB monthly bandwidth
- 25,000 transformations/month

More than enough for a portfolio site! 🎉

## 🔗 Useful Links

- [Cloudinary Dashboard](https://cloudinary.com/console)
- [Media Library](https://cloudinary.com/console/media_library)
- [Documentation](https://cloudinary.com/documentation)

---

**Need help?** Check the Cloudinary documentation or reach out for support!
