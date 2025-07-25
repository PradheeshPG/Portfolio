const VideoBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source src="/galaxy.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <img src="/galaxy.png" alt="Background" className="video-background" />
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoBackground;