export default function ImageWithComments({ src, alt, comments }) {
  return (
    <div className="relative w-full max-w-md mx-auto  p-2 bg-white shadow py-8  rounded-lg object-cover object-center">
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover rounded-lg"
      />

      {/* Comments with Placeholders */}
      {comments.map((comment, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-center group" // Add "group" here for each comment
          style={{
            top: `${comment.top}%`,
            left: `${comment.left}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Placeholder Dot */}
          <div className="w-4 h-4  rounded-full relative">
            <i class="fa-regular fa-hand-pointer text-gray-900 absolute top-1/3 right-0"></i>
          </div>

          {/* Comment Box (Initially Hidden, shown on hover) */}
          <div className="opacity-0 min-w-40 group-hover:opacity-100 bg-gray-800 bg-opacity-80 text-xs text-white p-2 rounded-md mt-1 transition-opacity duration-300 ease-in-out">
            {comment.text}
          </div>
        </div>
      ))}
    </div>
  );
}
