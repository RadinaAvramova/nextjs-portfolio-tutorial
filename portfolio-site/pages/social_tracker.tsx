import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../public/youtube.jpg";

const SocialTracker: NextPage = () => {
  return (
    <div>
      <h1 className="text-xl text-indigo-600 mb-4 font-bold">
        Social Media Usage Tracker
      </h1>
      <Image src={projectImage} />
      <div className="mt-4">

      </div>
      <div className="mt-6">
        <Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default SocialTracker;
