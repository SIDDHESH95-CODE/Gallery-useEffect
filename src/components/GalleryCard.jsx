import React from "react";

function GalleryCard({ data }) {
  const { author, download_url, url } = data;
  // console.log(author);
  // console.log(download_url);

  return (
    <div>
      <div className="img w-60 h-56 overflow-hidden rounded-md">
        <a href={url} target="_blank">
          <img
            className="w-full h-full object-cover"
            src={download_url}
            alt="image not available"
          />
        </a>
      </div>
      <h3 className="mt-2 font-semibold text-sm">{author}</h3>
    </div>
  );
}

export default GalleryCard;
