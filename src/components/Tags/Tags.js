import './tags.css';

function Tags({tags}) {
  return (
    <div className="tags">   
        {tags.map((tag, id) => (
          <div className="taglist" key={id}>{tag}</div>
        ))} 
    </div>
  );
};

export default Tags;