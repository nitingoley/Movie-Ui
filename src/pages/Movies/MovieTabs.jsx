import React from 'react'
import { Link } from 'react-router-dom'

export const MovieTabs = ({userInfo , submitHandler , comment , setComment , movie}) => {
  return (
    <div>
      <section>
        {userInfo ? (
          <form onSubmit={submitHandler}>
            <div className="my-2">
              <label
                htmlFor="comment"
                className="block text-2xl font-bold mb-2"
              >
                Write Your Review
              </label>
              <textarea
                id="comment"
                rows={3}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="p-2 border rounded-lg xl:w-[40rem] text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded-lg"
            >
              Submit Review
            </button>
          </form>
        ) : (
          <p>
            Please <Link to={"/login"}>Sign In</Link>
          </p>
        )}
      </section>

      {/* <section className="mt-[3rem]">
        <div>
          {movie?.reviews.length === 0 && <p>No Review</p>}
          <div>
            {movie?.reviews.map((review) => (
              <div
                className="bg-[#1A1A1A] p-4 rounded-lg w-[50%] mt-[2rem]"
                key={review._id}
              >
                <div className='flex justify-between'>
                    <strong className='text-[#B0B0B0]'>
                        {review.name}
                    </strong>
                <p className='text-[#B0B0B0]'>
                    {review.createdAt.substring(0 , 10)}
                </p>
                </div> 

                <p className='my-4'>
                    {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}



<section className="mt-[3rem]">
  <div>
    {movie?.reviews.length === 0 && <p>No Review</p>}
    <div>
      {movie?.reviews.map((review) => (
        <div
          className="bg-[#1A1A1A] p-4 rounded-lg w-[50%] mt-[2rem]"
          key={review._id}
        >
          <div className="flex justify-between">
            <strong className="text-[#B0B0B0]">
              {review.name}
            </strong>
            <p className="text-[#B0B0B0]">
              {review.createdAt
                ? review.createdAt.substring(0, 10)
                : "No date available"}
            </p>
          </div>
          <p className="my-4">{review.comment}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}
