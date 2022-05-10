import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MemberProps {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Member: React.FC<MemberProps> = ({ id, name, socialId, link }) => {
  return (
    <div>
      <Image src={link} alt={name} width={1366} height={1555} />
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xl">
        <Link href={link}>
          <a target="_blank">{socialId}</a>
        </Link>
      </div>
    </div>
  );
};

export default Member;
