function StarRating({ rating, onChange }) {

  return (
    <div className="flex gap-1 text-3xl cursor-pointer">

      {[1,2,3,4,5].map((star)=>(

        <span
          key={star}
          onClick={()=>onChange(star)}
        >

          {star<=rating ? "⭐":"☆"}

        </span>

      ))}

    </div>
  )

}

export default StarRating
