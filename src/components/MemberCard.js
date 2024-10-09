export default function MemberCard(props) {
  return (
    <a className="flex flex-col items-center p-2 rounded-xl bg-white/20">
      <img
        className="h-full w-full object-cover rounded-xl shadow-xl          "
        alt="profile picture"
        src="/img/profile.png"
      />
      <div className="w-full mt-4 flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-50">{props.name}</h3>
          <h4 className="text-md font-medium text-gray-200">{props.role}</h4>
        </div>
        <div className="flex items-center space-x-3">
          <span>social media icons</span>
        </div>
      </div>
    </a>
  );
}
