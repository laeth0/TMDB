export default function Loading() {
  return (
      <div aria-label="Loading..." role="status" className="flex items-center justify-center h-screen gap-8 ">
          <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-[#12C8C1]"></div>
          <span className="text-4xl font-medium text-gray-500">Loading...</span>
      </div>
  )
}
