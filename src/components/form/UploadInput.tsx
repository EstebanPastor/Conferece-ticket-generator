import { ChangeEvent } from "react";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  url: string;
}

const UploadInput = ({ onChange, url = "" }: Props) => {
  return (
    <div className="mb-4">
      <p className="mb-4 text-xl">Upload Avatar</p>
      <label className="border-3 border-dashed border-neutral-0 px-4 py-3 w-full block bg-neutral-700/50 hover:bg-neutral-700 rounded-xl cursor-pointer mb-2">
        <div className="bg-neutral-700 size-12.5 grid place-content-center rounded-xl border-2 border-neutral-500 mb-2 mx-auto overflow-hidden">
          <img
            src={url === "" ? "/assets/images/icon-upload.svg" : url}
            alt="icon upload"
            className={url === "" ? "w-6 h-6" : "w-full h-full object-cover"} 
          />
        </div>
        <input type="file" accept="image/*" className="hidden" onChange={onChange} />
        <p className="text-center block text-gray-500 text-sm">
          Drag and drop or click to upload
        </p>
      </label>
      <div className="flex gap-2">
        <img src="/assets/images/icon-info.svg" alt="icon info" />
        <p>SVG, PNG, JPG or GIF (MAX 800X400px)</p>
      </div>
    </div>
  );
};

export default UploadInput;