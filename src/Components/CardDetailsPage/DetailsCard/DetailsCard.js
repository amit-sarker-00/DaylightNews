import { Link } from 'react-router-dom';
import DetailsCardReaction from '../DetailsCardReaction/DetailsCardReaction';
import DetailsCommentBox from '../DetailsCommentBox/DetailsCommentBox';




const DetailsCard = ({ detail, reCall, reactions, refetch, singleNewsComment }) => {

  const { picture, title, category, description, author } = detail

  return (
    <div>
      <div>
        <div className=' relative  w-full  object-cover '>
          <img className='w-full lg:h-[500px]' src={picture} alt="" />
          <div className=' hero-overlay absolute top-0'>
            <Link to={`/category/${category}`} className='absolute top-0 right-0 bg-red-700 py-1 px-5 text-white font-semibold'>{category}</Link>
          </div>
        </div>
        <div>
          <p className='py-2'>{author?.published_date}</p>
          <p className='text-2xl font-semibold '>{title}</p>
          <p className='py-3 text-lg'>{description}</p>
          <div className='mr-0 lg:mr-5 bg-blue-100 py-5 mx-auto'>
            <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/AD_Magazine_logo.svg/1280px-AD_Magazine_logo.svg.png" alt="" />
            <img className='h-full lg:h-[300px] w-full  py-5' src="https://i.ytimg.com/vi/7RDwcUMJ2lU/maxresdefault.jpg" alt="" />
          </div>
        </div>

        <div className='flex items-center flex-col md:flex-row'>
          <div className='flex items-center gap-5'>
            <img className='w-20' src={author?.img ? author?.img : "N/A"
            } alt="" />
            <div>
              <h1 className='text-xl font-semibold text-gray-500'>{author?.name}</h1>
              <h1>{author?.published_date
              }</h1>
            </div>
          </div>
          <DetailsCardReaction reCall={reCall} reactions={reactions} detail={detail} />
        </div>
        <div className=' '>
          <DetailsCommentBox singleNewsComment={singleNewsComment} refetch={refetch} detail={detail} />
        </div>
      </div >
    </div>
  );
};

export default DetailsCard;