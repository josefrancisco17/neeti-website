export default function MemberCard(props) {
  return (
    <a className="flex flex-col items-center p-3 w-full max-w-xs h-[350px] bg-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <img
        className="min-h-60 min-w-60 object-cover rounded-xl shadow-xl"
        alt="profile picture"
        src="/img/profile.png"
      />
      <div className="mt-4 flex flex-row justify-between items-center">
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
