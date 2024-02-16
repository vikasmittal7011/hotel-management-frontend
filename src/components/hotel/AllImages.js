
const AllImages = ({ hotel, setShowImages }) => {
    return (
        <div className="absolute inset-0 min-h-screen flex justify-center">
            <div className="p-8 grid">
                <div>
                    <button onClick={() => setShowImages(false)} className="fixed bg-gray-500 text-white flex gap-2 px-2 py-1 rounded-xl right-8 top-24 opacity-80" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        Close
                    </button>
                    <h1 className="text-2xl font-bold mb-5">{hotel.title}</h1>
                </div>
                {hotel?.photos?.length > 0 && (
                    hotel?.photos?.map((img, i) => (
                        <div key={i}>
                            <img alt="" src={img} className="acpect-square object-cover mb-5 rounded-xl" width={800} height={800} />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default AllImages
