import LinkButton from "@/components/ui/link-button";
import ProfileCard from "./profile-card";
type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="container flex justify-between items-center mx-auto pt-4">
      <LinkButton className="text-white" linkText="HOME"/>
      <LinkButton className="text-white" linkText="RIVALZ ORIGINALS"/>
      <LinkButton className="text-white" linkText="EXCLUSIVE SERIES"/>
      <LinkButton className="text-white" linkText="MOVIES"/>
      <LinkButton className="text-white" linkText="DOCUMENTARY"/>
      <LinkButton className="text-white" linkText="INTERACTIVE"/>
      <ProfileCard profileImageSrc="/profile.png" userName="Leao"/>
    </div>
  );
}
