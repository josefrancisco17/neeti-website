export default function MemberCard(props) {
    const getSocialIcon = (platform) => {
        switch (platform) {
            case 'github':
                return <img src="/img/github.svg" alt="GitHub" className="w-5 h-5" />;
            case 'linkedin':
                return <img src="/img/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />;
            case 'mail':
                return <img src="/img/mail.svg" alt="Mail" className="w-5 h-5" />;
            case 'instagram':
                return <img src="/img/instagram.svg" alt="Instagram" className="w-5 h-5" />;
            default:
                return null;
        }
    };


  return (
    <div className="flex flex-col p-3 w-full max-w-xs h-[350px] bg-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <img
        className="min-h-60 min-w-60 object-cover rounded-xl shadow-xl"
        alt="profile picture"
        src={props.img}
      />
      <div className="mt-4 flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-50">{props.name}</h3>
          <h4 className="text-md font-medium text-gray-200">{props.role}</h4>
        </div>
        <div className="flex items-end space-x-3">
            {Object.entries(props.social).map(([platform, url]) => (
                <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                    {getSocialIcon(platform)}
                </a>
            ))}
        </div>
      </div>
    </div>
  );
}
