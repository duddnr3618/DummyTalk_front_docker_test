const ChannelSection = ({ label, channelType, server }) => {
    return (
        <div className="flex items-center justify-between py-2">
            <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
                {label}
            </p>
        </div>
    );
};
export default ChannelSection;
